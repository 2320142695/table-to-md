(function () {
    if(!document.querySelector('.scrollable table')){
        return;
    }
    const rows = document.querySelector('.scrollable table').rows;
    let md = `|列|类型|注释|\n|-|-|-|\n`;
    for (let i = 1; i < rows.length; i++) {    //--循环所有的行
        const cells = rows[i].cells;
        md += `|${cells[0].innerHTML.replace(/\s*/g, "")}|${cells[1].textContent}|${cells[2].innerHTML.replace(/\s*/g, "")}|\n`;
    }
    console.log(md);

    md = `|列|注释|\n|-|-|\n`;
    for (let i = 1; i < rows.length; i++) {    //--循环所有的行
        const cells = rows[i].cells;
        md += `|${cells[0].innerHTML.replace(/\s*/g, "")}|${cells[2].innerHTML.replace(/\s*/g, "")}|\n`;
    }
    console.log(md);

    md = `|列|注释|列|注释|\n|-|-|-|-|\n`;
    for (let i = 1; i < rows.length;) {    //--循环所有的行
        const cells = rows[i].cells;
        md += `|${cells[0].innerHTML.replace(/\s*/g, "")}|${cells[2].innerHTML.replace(/\s*/g, "")}|`;
        if (rows[i + 1] !== undefined) {
            let cells2 = rows[i + 1].cells;
            md += `${cells2[0].innerHTML.replace(/\s*/g, "")}|${cells2[2].innerHTML.replace(/\s*/g, "")}|\n`;
        } else {
            md += `||\n`;
        }
        i = i + 2;
    }
    console.log(md);
})()
