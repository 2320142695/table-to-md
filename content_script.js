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
})()
