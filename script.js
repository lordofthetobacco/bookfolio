let position = 0;
const bookElement = document.querySelector('.book');
const itemsDictionary = {};
    function readJsonToDict(fileDir, targetDict) {
        fetch(fileDir).then(response => response.json()).then(data => {
            data.items.forEach(item => {
                targetDict[item.id] = {
                    imageURL: item.imageUrl,
                    descriptionUrl: item.descriptionUrl
                };
            });
            console.log(targetDict)
        }).catch(error => console.error("Couldn't load JSON file"))
    }

    function createPagesBasedOfContent(targetElement){
        let pageCounter = 2;
        fetch('items.json').then(response => response.json()).then(data => {
            data.items.forEach(item => {
                const leftDiv = document.createElement('div');
                leftDiv.classList.add('page');
                leftDiv.id = pageCounter.toString();
                pageCounter += 1;
                const rightDiv = document.createElement('div');
                rightDiv.classList.add('page');
                rightDiv.id = pageCounter.toString();
                pageCounter += 1;
                targetElement.appendChild(leftDiv);
                targetElement.appendChild(rightDiv);
            });
        }).catch(error => console.error('asd'))
    }

    function addBackCover(targetElement) {
        const backCover = document.createElement('div');
        backCover.classList.add('back-cover');
        backCover.id = '999';
        targetElement.appendChild(backCover);
    }

    function fillBookWithElements(targetElement) {
        const frontCover = document.createElement("div");
        const firstPage = document.createElement('div');
        frontCover.classList.add('front-cover');
        frontCover.id = '0';
        firstPage.classList.add('page');
        firstPage.id = '1';
        targetElement.appendChild(frontCover);
        targetElement.appendChild(firstPage);
    }

    readJsonToDict('items.json', itemsDictionary);
    fillBookWithElements(bookElement);
    createPagesBasedOfContent(bookElement);
    addBackCover(bookElement);
    document.querySelector('.right-button').addEventListener('click', function () {
        let pageSearchedFor;
        switch (position) {
            case 0:
                const frontCover = document.querySelector('.front-cover');
                bookElement.style.transform = 'translateX(300px)';
                frontCover.style.transform = 'rotateX(10deg) rotateY(-180deg)'
                position++;
                console.log(position)
                break;
            case 1:
                pageSearchedFor = document.getElementById(position);
                pageSearchedFor.style.transformOrigin = 'center left';
                pageSearchedFor.style.transform = 'rotateY(-180deg)';
                pageSearchedFor.style.zIndex = 6;
                position++;
                console.log(position)
                break;
            default:
                pageSearchedFor = document.getElementById(position);
                pageSearchedFor.style.transformOrigin = 'center left';
                pageSearchedFor.style.transform = 'rotateY(-180deg)';
                pageSearchedFor.style.zIndex = 6;
                position++;
                console.log(position)
                break;
        }
    });

    document.querySelector('.left-button').addEventListener('click', function () {
        let pageSearchedFor;
        switch (position) {
            case 0:
                break;
            case 1:
                let frontCover = document.querySelector('.front-cover')
                bookElement.style.transform = '';
                frontCover.style.transform = '';
                frontCover.style.zIndex = 6;
                position--;
                console.log(position)
                break;
            default:
                pageSearchedFor = document.getElementById(position - 1);
                pageSearchedFor.style.transformOrigin = 'center left';
                pageSearchedFor.style.transform = '';
                pageSearchedFor.style.zIndex = 5;
                position--;
                console.log(position)
                break;
        }
    });