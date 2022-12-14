import NarrowDesktop from "discourse/lib/narrow-desktop";

export default {
  name: "always-narrow-view",

  initialize(container) {
    NarrowDesktop.isNarrowDesktopView = () => true;
  }
}