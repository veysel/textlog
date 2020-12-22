require("./index");

let throwList = [];

const checkLog = () => {
    let testText = "test";
    let checkTestText = testText.log();

    if (testText != checkTestText) {
        throwList.push("Test text failed!");
    }
}

checkLog();

if (throwList.length < 1) {
    console.log("Test Success.");
    return 0;
}
else {
    console.log("Test Failed! (Fail: " + throwList.length.toString() + ")\n");
    console.log(throwList.join("\n"));
    throw new Error('Test Failed!');
}