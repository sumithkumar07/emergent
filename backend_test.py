import requests
import unittest
import os
import sys
from datetime import datetime

class EmergentAPITester(unittest.TestCase):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        # Get the backend URL from the frontend .env file
        with open('/app/frontend/.env', 'r') as f:
            for line in f:
                if line.startswith('REACT_APP_BACKEND_URL='):
                    self.base_url = line.strip().split('=')[1].strip('"')
                    break
        
        if not hasattr(self, 'base_url'):
            raise ValueError("Could not find REACT_APP_BACKEND_URL in frontend/.env")
        
        print(f"Using backend URL: {self.base_url}")

    def test_01_root_endpoint(self):
        """Test the root endpoint"""
        print("\n🔍 Testing root endpoint...")
        url = f"{self.base_url}/api/"
        
        try:
            response = requests.get(url)
            self.assertEqual(response.status_code, 200)
            data = response.json()
            self.assertEqual(data.get("message"), "Hello World")
            print("✅ Root endpoint test passed")
        except Exception as e:
            print(f"❌ Root endpoint test failed: {str(e)}")
            raise

    def test_02_create_status_check(self):
        """Test creating a status check"""
        print("\n🔍 Testing status check creation...")
        url = f"{self.base_url}/api/status"
        client_name = f"test_client_{datetime.now().strftime('%Y%m%d%H%M%S')}"
        data = {"client_name": client_name}
        
        try:
            response = requests.post(url, json=data)
            self.assertEqual(response.status_code, 200)
            result = response.json()
            self.assertEqual(result.get("client_name"), client_name)
            self.assertIn("id", result)
            self.assertIn("timestamp", result)
            print("✅ Status check creation test passed")
            return result.get("id")
        except Exception as e:
            print(f"❌ Status check creation test failed: {str(e)}")
            raise

    def test_03_get_status_checks(self):
        """Test retrieving status checks"""
        print("\n🔍 Testing status check retrieval...")
        url = f"{self.base_url}/api/status"
        
        try:
            response = requests.get(url)
            self.assertEqual(response.status_code, 200)
            result = response.json()
            self.assertIsInstance(result, list)
            if result:
                self.assertIn("client_name", result[0])
                self.assertIn("id", result[0])
                self.assertIn("timestamp", result[0])
            print("✅ Status check retrieval test passed")
        except Exception as e:
            print(f"❌ Status check retrieval test failed: {str(e)}")
            raise

def run_tests():
    # Create a test suite
    suite = unittest.TestSuite()
    
    # Add the tests to the suite
    suite.addTest(EmergentAPITester('test_01_root_endpoint'))
    suite.addTest(EmergentAPITester('test_02_create_status_check'))
    suite.addTest(EmergentAPITester('test_03_get_status_checks'))
    
    # Run the tests
    runner = unittest.TextTestRunner(verbosity=2)
    result = runner.run(suite)
    
    # Return 0 if all tests passed, 1 otherwise
    return 0 if result.wasSuccessful() else 1

if __name__ == "__main__":
    sys.exit(run_tests())