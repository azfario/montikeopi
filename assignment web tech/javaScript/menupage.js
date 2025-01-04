function showTab(tabId) {
    // hide tab
    const allTabs = document.querySelectorAll(".tab-content");
    allTabs.forEach((tab) => (tab.style.display = "none"));

    // show tab
    const selectedTab = document.getElementById(tabId);
    if (selectedTab) {
      selectedTab.style.display = "block";
    }
  }

  // specialty onload
  window.onload = function () {
    showTab("montiSpecialtyCoffee");
  };