import unittest
from main import create_app
from config import TestConfig


class APITestCase(unittest.TestCase):
    def setUp(self):
        self.app = create_app(TestConfig)
