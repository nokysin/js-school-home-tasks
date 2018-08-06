const finder = {

    rootElement: null,
    firstFolderElements: null,
    subFolderSelector: '.folder-content',
    selectedItems: [],
    selectedBackgroundColor: "#4c90ff",

    run: () => {

        // recieve elements from DOM
        finder.loadElements();

        // return if our elements is not exist
        if (null === finder.rootElement && null === finder.firstFolderElements) {
            return false;
        }

        // close all opens sub folder
        finder.closeSubFolder();
        // bin event Click to folders
        finder.bindEventsOpenSubFolder();
    },

    bindEventsOpenSubFolder: () => {
        finder.firstFolderElements.forEach(item => {
            item.addEventListener('click', (event) => {
            

                // select one or few folders
                if (false === event.shiftKey) {
                    finder.removeBackgroundToSelectedItemsAll();
                }
                finder.addBackgroundToSelectedItem(event.target);

                const subFolder = event.target.querySelector(finder.subFolderSelector);

                // open or close subfolder
                if (null !== subFolder) {

                    switch (subFolder.style.display) {
                        case 'none':
                            subFolder.style.display = '';
                            break;
                        case '':
                            subFolder.style.display = 'none';
                            break
                    }
                }
            });
        });
    },

    searchFolderWithSubFolder: () => {

        let array = [];

        finder.firstFolderElements.forEach(item => {
            const searchingElement = item.querySelector(finder.subFolderSelector);
            if (null !== searchingElement) {
                array.push(item);
            }
        });

        return array;
    },

    closeSubFolder: () => {

        finder.searchFolderWithSubFolder().forEach(item => {
            const subFolder = item.querySelector(finder.subFolderSelector);
            finder.addDisplayNone(subFolder);
        });
    },

    openSubFolder: (item) => {
        const subFolder = item.querySelector(finder.subFolderSelector);
        if (null !== subFolder) {
            finder.removeDisplayNone(subFolder);
        }
    },

    loadElements: () => {
        finder.rootElement = document.querySelector('.root');
        finder.firstFolderElements = document.querySelectorAll('.root > .folder');
    },

    removeDisplayNone: (element) => {
        element.style.display = "";
    },

    addDisplayNone: (element) => {
        element.style.display = "none";
    },

    addBackgroundToSelectedItem: (element) => {
        finder.selectedItems.push(element);
        element.style.backgroundColor = finder.selectedBackgroundColor;
    },

    removeBackgroundToSelectedItemsAll: () => {
        finder.selectedItems = finder.selectedItems.reduce((accumulator, item) => {
            item.style.backgroundColor = '';
        }, []) || [];
    }
};


window.onload = () => {
    finder.run();
}