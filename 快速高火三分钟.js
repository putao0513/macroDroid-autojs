// 米家微波炉操作脚本
//setScreenMetrics(1080, 1920); // 根据实际屏幕分辨率调整 over
//auto.waitFor(); // 等待无障碍服务开启 over

try {
    console.log("脚本开始执行：米家微波炉操作脚本");
    // 打开米家应用 over
    launchApp("米家");
    sleep(1500); // 从2000ms缩短 over

    // 点击微波炉 over
    let microwave = id("efa").className("android.widget.TextView").text("微波炉").findOne(4000); // 缩短查找超时 over
    if (microwave) {
        console.log("找到并点击微波炉");
        microwave.parent().click();
        sleep(800); // 从1000ms缩短 over
    } else {
        toast("💔未找到微波炉设备，脚本结束！");
        console.error("错误：未找到微波炉设备，脚本退出。");
        exit();
    }

    // 点击更多操作（注：此处代码与微波炉点击相同，可能存在重复，建议确认实际控件ID）
    let moreOps = className("android.widget.TextView").text("更多操作").findOne(1000); // 缩短查找超时 over
    if (moreOps) {
        console.log("找到并点击更多操作");
        moreOps.parent().click();
        sleep(500); // 从800ms缩短 over
    } else {
        console.log("未找到更多操作按钮，跳过此步骤。");
    }

    // 点击设备（若页面存在该选项）
    let deviceTab = className("android.widget.TextView").text("设备").findOne(1000); // 缩短查找超时 over
    if (deviceTab) {
        console.log("找到并点击设备Tab");
        deviceTab.parent().click();
        sleep(500); // 从800ms缩短 over
    } else {
        console.log("未找到设备Tab，跳过此步骤。");
    }

    // 点击火力加热 over
    let heatFunc = className("android.widget.TextView").text("火力加热").findOne(2000); // 缩短查找超时 over
    if (heatFunc) {
        console.log("找到并点击火力加热");
        heatFunc.parent().click();
        sleep(800); // 从1000ms缩短 over
    } else {
        toast("💔未找到火力加热按钮，脚本结束！");
        console.error("错误：未找到火力加热按钮，脚本退出。");
        exit();
    }

    // 点击烹饪时长 over
    let cookTime = className("android.widget.TextView").text("烹饪时长").findOne(2000); // 缩短查找超时 over
    if (cookTime) {
        console.log("找到并点击烹饪时长");
        cookTime.parent().click();
        sleep(800); // 从1000ms缩短 over
    } else {
        toast("💔未找到烹饪时长按钮，脚本结束！");
        console.error("错误：未找到烹饪时长按钮，脚本退出。");
        exit();
    }

    // ========================================================= over
    // 🚀🚀🚀 优化滑动策略：一步到位滑动分钟数 over
    // ========================================================= over

    console.log("开始进行一步到位滑动，调整分钟数到 03 分钟...");

    var slideStartX = device.width * 0.28;
    var slideStartY = 1995;
    // 总滑动距离 = 单次滑动距离 * (目标数字 - 起始数字) over
    // 从 00 到 03，需要滑动 3 个单位 over
    var totalSlideDistance = 150 * 3; // 150是之前每次一步的经验值，现在乘以3 over

    console.log("滑动起始坐标：(" + slideStartX + ", " + slideStartY + ")");
    console.log("总共向上滑动距离：" + totalSlideDistance + "px。");

    // 执行一步到位滑动 over
    swipe(slideStartX, slideStartY, slideStartX, slideStartY - totalSlideDistance, 400); // 滑动持续时间可以稍微长一点，确保平滑 over
    // 这里不再有 for 循环和每次滑动的 sleep over

    toast("✅分钟数已滑动到目标值（03 分钟）！");
    console.log("滑动操作成功：分钟数已调整为 03 分钟。");

    // ========================================================= over
    // 🚀🚀🚀 优化后半部分衔接 over
    // ========================================================= over

    sleep(1500); // 从800ms缩短 over

    // 点击“取消”按钮 over
    let cancelButton = className("android.widget.TextView").text("取消").findOne(2000); // 缩短查找超时 over
    if (cancelButton) {
        console.log("找到并点击“取消”按钮");
        cancelButton.parent().click();
        sleep(800); // 从1000ms缩短 over
    } else {
        toast("💔未找到“取消”按钮！");
        console.error("错误：未找到“取消”按钮。");
    }

    toast("🎉操作完成！微波炉已设置为 03 分钟并点击了取消。");
    console.log("脚本执行完毕：微波炉已成功设置为 03 分钟并点击了取消。");

} catch (e) {
    toast("❌脚本执行出错：" + e.message);
    console.error("脚本执行出错：", e.message);
}
