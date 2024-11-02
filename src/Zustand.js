// useStore.js
import { create } from "zustand";

const useStore = create((set) => ({
  // Initial state
  count: 1,
  toggle: false,
  color: "#121212", // Text color for light mode
  bg: "#fff", // Background color for light mode

  // Toggle function
  handleToggle: () =>
    set((state) => ({
      toggle: !state.toggle,
      color: state.toggle ? "#000" : "#fff", // Light text color when in dark mode
      bg: state.toggle ? "#fff" : "#121212", // Dark background for night mode
    })),
}));

export default useStore;
