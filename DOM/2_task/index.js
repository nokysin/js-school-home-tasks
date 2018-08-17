const finder = {

    rootElement: null,
    firstFolderElements: null,
    openButton: null,
    subFolderSelector: '.folder-content',
    selectedItems: [],
    selectedBackgroundColor: "#4c90ff",
    classHide: 'd-none',

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
                const target = event.target;

                // select one or few folders
                if (false === event.shiftKey) {
                    finder.removeBackgroundToSelectedItemsAll();
                }
                finder.addBackgroundToSelectedItem(target);
            });
        });

        finder.openButton.forEach(item => {

            item.addEventListener('click', (event) => {

                const target = event.target;
                const folder = item.nextElementSibling;
                const subFolder = folder.querySelector(finder.subFolderSelector);

                // open or close subfolder
                if (null !== subFolder) {
                    finder.removeBackgroundToSelectedItemsAll();
                    finder.toggleDisplayNone(subFolder);
                    finder.toggleOpenButton(target);
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
        finder.firstFolderElements = document.querySelectorAll('.root  .folder');
        finder.openButton = document.querySelectorAll('.root .open-button');
    },

    removeDisplayNone: (element) => {
        element.classList.remove(finder.classHide);
    },

    addDisplayNone: (element) => {
        element.classList.add(finder.classHide);
    },

    toggleDisplayNone: (element) => {
        (element.className.indexOf(finder.classHide) >= 0) ? finder.removeDisplayNone(element) : finder.addDisplayNone(element);
    },

    toggleOpenButton: (element) => {
        const label = element.textContent === '+' ? '-' : '+';
        element.textContent = label;
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