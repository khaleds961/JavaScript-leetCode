let mainData;
function run() {
    let div = document.createElement('div');
    div.id = 'data';
    let xhr = new XMLHttpRequest();
    let url = './article.json';
    xhr.open('GET', url, true);
    // function execute after request is successful 
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            mainData = JSON.parse(this.responseText);
            mainData.forEach(element => {
                element['section'] = "All";
                let subDiv = document.createElement('div');
                let h2 = document.createElement('h2');
                let p1 = document.createElement('p');
                let p2 = document.createElement('p');
                let p3 = document.createElement('p');
                h2.innerHTML = element.title + element.id;
                p1.innerHTML = element.article;
                p2.innerHTML = element.author;
                p3.innerHTML = 'Category: ' + element.section;
                subDiv.append(h2);
                subDiv.append(p1);
                subDiv.append(p2);
                subDiv.append(p3);
                div.append(subDiv);
                document.body.append(div)
            });


            let updateData = JSON.stringify(mainData)
            console.log(updateData);
            
        }
    }
    // Sending our request 
    xhr.send();
}

run()