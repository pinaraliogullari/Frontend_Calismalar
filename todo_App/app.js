let data = [];
let count = 0;

function AddTask() {
    let taskValue = document.getElementById('task').value;

    let task = {
        id: count,
        task: taskValue,
        statu: 'to-do',
    }

    data.push(task);

    document.getElementById('task').value = null; /*inputun içini boşaltıyoruz */

    FillData();
    count++;

}

function FillData() {
    let tempHTML = "";

    for (let i = 0; i < data.length; i++) {
        if (data[i].statu == 'to-do') {
            tempHTML += '<div class="input-group mb-3">' +
                '<div class="input-group-prepend">' +
                '<div class="input-group-text">' +
                '<input type="checkbox" aria-label="Checkbox for following text input" onclick="ClickCheck(' + data[i].id + ')">' +
                '</div>' +
                '</div>' +
                '<p type="text" class="form-control" aria-label="Text input with checkbox">' + data[i].task + '</p>' +
                '<div class="input-group-append">' +
                '<button class="btn btn-outline-primary" type="button" onclick="ClickEdit(' + data[i].id + ');"><i class="fas fa-edit"></i></button>' +
                '<button class="btn btn-outline-danger" type="button" onclick="DeleteTask(' + data[i].id + ');"><i class="fas fa-trash-alt"></i></button>' +
                '</div>' +
                '</div>';

        }


    }
    document.getElementById('to-do').innerHTML = tempHTML;

}