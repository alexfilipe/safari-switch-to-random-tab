browser.action.onClicked.addListener(async () => {
    const tabs = await browser.tabs.query({ currentWindow: true });
    const inactiveTabs = tabs.filter((tab) => !tab.active && tab.id !== undefined);

    if (inactiveTabs.length === 0)
        return;

    const randomIndex = Math.floor(Math.random() * inactiveTabs.length);
    const randomTab = inactiveTabs[randomIndex];

    await browser.tabs.update(randomTab.id, { active: true });
});
