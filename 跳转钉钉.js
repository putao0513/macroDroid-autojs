/**
 * Auto.js 脚本：打开钉钉并点击打卡（无障碍服务检查已移除，无多余字符）
 * 作者：Gemini 🤖
 * 日期：2025年6月26日
 */

// 主函数
function main() {
    toast("正在尝试打开钉钉应用...🚀");
    // 使用包名打开钉钉，如果钉钉名称有变化，包名通常更稳定
    // 钉钉的包名通常是 com.alibaba.android.dingtalk
    app.launchApp("钉钉");

    // 等待钉钉应用启动，可以根据实际情况调整等待时间
    sleep(5000); // 等待5秒，确保钉钉完全启动

    toast("正在尝试点击打卡按钮...🎯");
    // 查找并点击文本为“打卡”的TextView
    // 使用 className 和 text 组合查找可以更精确
    var checkInButton = id("item_title").className("android.widget.TextView").text("打卡").findOne();

    if (checkInButton) {
        checkInButton.parent().click(); // 点击打卡按钮的父布局
        toast("打卡按钮已点击！🎉");
    } else {
        toast("未找到打卡按钮，请确保钉钉已打开且界面正确。🧐");
    }

    sleep(2000); // 等待2秒，观察点击效果
    toast("脚本执行完毕！✅");
}

// 运行主函数
main();
