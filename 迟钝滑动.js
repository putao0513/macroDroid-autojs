// 米家微波炉操作脚本
setScreenMetrics(1080, 1920); // 根据实际屏幕分辨率调整 over
auto.waitFor(); // 等待无障碍服务开启 over

try {
    console.log("脚本开始执行：米家微波炉操作脚本");
    // 打开米家应用 over
    launchApp("米家");
    sleep(1500);

    // 点击微波炉 over
    let microwave = id("efa").className("android.widget.TextView").text("微波炉").findOne(4000);
    if (microwave) {
        console.log("找到并点击微波炉");
        microwave.parent().click();
        sleep(800);
    } else {
        toast("💔未找到微波炉设备，脚本结束！");
        console.error("错误：未找到微波炉设备，脚本退出。");
        exit();
    }

    // 点击更多操作（注：此处代码与微波炉点击相同，可能存在重复，建议确认实际控件ID）
    let moreOps = className("android.widget.TextView").text("更多操作").findOne(1000);
    if (moreOps) {
        console.log("找到并点击更多操作");
        moreOps.parent().click();
        sleep(500);
    } else {
        console.log("未找到更多操作按钮，跳过此步骤。");
    }

    // 点击设备（若页面存在该选项）
    let deviceTab = className("android.widget.TextView").text("设备").findOne(1000);
    if (deviceTab) {
        console.log("找到并点击设备Tab");
        deviceTab.parent().click();
        sleep(500);
    } else {
        console.log("未找到设备Tab，跳过此步骤。");
    }

    // 点击火力加热 over
    let heatFunc = className("android.widget.TextView").text("火力加热").findOne(2000);
    if (heatFunc) {
        console.log("找到并点击火力加热");
        heatFunc.parent().click();
        sleep(800);
    } else {
        toast("💔未找到火力加热按钮，脚本结束！");
        console.error("错误：未找到火力加热按钮，脚本退出。");
        exit();
    }

    // 点击烹饪时长 over
    let cookTime = className("android.widget.TextView").text("烹饪时长").findOne(2000);
    if (cookTime) {
        console.log("找到并点击烹饪时长");
        cookTime.parent().click();
        sleep(800);
    } else {
        toast("💔未找到烹饪时长按钮，脚本结束！");
        console.error("错误：未找到烹饪时长按钮，脚本退出。");
        exit();
    }

    // ========================================================= over
    // 🚀🚀🚀 恢复分步滑动策略，并在每次滑动后“顿一下” over
    // ========================================================= over

    console.log("开始进行分步滑动，调整分钟数到 03 分钟...");

    var slideStartX = device.width * 0.28;
    var slideStartY = 1995;
    // 每次滑动一个单位的距离，这个值依然可能需要微调 over
    var singleStepDistance = 150;

    console.log("滑动起始坐标：(" + slideStartX + ", " + slideStartY + ")");
    console.log("每次滑动向上距离：" + singleStepDistance + "px。");

    // 从“00”到“03”需要向上滑动 3 次 over
    for (let i = 0; i < 3; i++) {
        // 从当前位置向上滑动一个单位 over
        swipe(slideStartX, slideStartY, slideStartX, slideStartY - singleStepDistance, 300); // 滑动持续时间保持 over
        // 每次滑动后“顿一下”，确保UI有时间刷新 over
        sleep(500); // 每次滑动后等待0.5秒，根据需要调整 over
        toast("第 " + (i + 1) + " 次滑动完成！");
        console.log("第 " + (i + 1) + " 次滑动已执行，等待UI稳定。");
    }

    toast("✅分钟数已滑动到目标值（03 分钟）！");
    console.log("所有滑动操作完成，分钟数已调整为 03 分钟。");

    // ========================================================= over
    // 🚀🚀🚀 优化后半部分衔接 over
    // ========================================================= over

    // 额外的“蹲一下”时间，确保最终时间值稳定显示 over
    sleep(1000); // 确保最终时间稳定，从1500ms调整到1000ms，可以根据实际情况微调 over
    console.log("滑动操作后，等待最终UI稳定...");

    // 点击“取消”按钮 over
    let cancelButton = className("android.widget.TextView").text("确认").findOne(2000);
    if (cancelButton) {
        console.log("找到并点击“取消”按钮");
        cancelButton.parent().click();
        sleep(800);
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
