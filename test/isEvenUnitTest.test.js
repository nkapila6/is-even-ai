// test/isEvenTest.js
const isOdd = require("is-odd-ai"); // Import the module to be mocked
const isEven = require("../index");

jest.mock("is-odd-ai"); // Mock the entire 'is-odd-ai' module

describe("isEven function", () => {
  afterEach(() => {
    jest.clearAllMocks(); // Clear mock data after each test
  });

  it("should return false for odd numbers", async () => {
    // given
    isOdd.mockImplementation((number) => {
      if (number === 7) {
        return Promise.resolve(true);
      }
      return Promise.resolve(false);
    });
    const result = await isEven(7);
    expect(result).toBe(false);
  });

  it("should return true for even numbers", async () => {
    isOdd.mockImplementation((number) => {
      if (number === 10) {
        return Promise.resolve(false);
      }
      return Promise.resolve(true);
    });
    const result = await isEven(10);
    expect(result).toBe(true);
  });

  it("should handle zero correctly", async () => {
    isOdd.mockImplementation((number) => {
      if (number === 0) {
        return Promise.resolve(false);
      }
      return Promise.resolve(true);
    });
    const result = await isEven(0);
    expect(result).toBe(true);
  });

  it("should handle negative odd numbers correctly", async () => {
    isOdd.mockImplementation((number) => {
      if (number === -5) {
        return Promise.resolve(true);
      }
      return Promise.resolve(false);
    });
    const result = await isEven(-5);
    expect(result).toBe(false);
  });

  it("should handle negative even numbers correctly", async () => {
    isOdd.mockImplementation((number) => {
      if (number === -8) {
        return Promise.resolve(false);
      }
      return Promise.resolve(true);
    });
    const result = await isEven(-8);
    expect(result).toBe(true);
  });

  it("should throw an error for non-numeric input", async () => {
    isOdd.mockRejectedValue(new Error("Invalid input")); // Simulate an error for invalid input
    await expect(isEven("abc")).rejects.toThrow("Invalid input");
  });
});
