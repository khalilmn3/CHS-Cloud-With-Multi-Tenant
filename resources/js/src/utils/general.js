import moment from 'moment';
import {formatDateDatabase} from '@/utils/format.js';

function dateDiff(dateStart, dateEnd) {
    const start = moment(formatDateDatabase(dateStart));
    const end = moment(formatDateDatabase(dateEnd));
    //Difference in number of days
    return moment.duration(end.diff(start)).asDays();
}

function getTime() {
    const date= new Date();
	const val = moment(date).format('HH:mm:ss');
	return val;
}

function cloneObject(object) {
    const clone ={};
    for ( const key in object ) {
        if(object.hasOwnProperty(key)) //ensure not adding inherited props
            clone[key]=object[key];
    }
    return clone;
}

function removeArrayByKey(arr) {
    var what, a = arguments, L = a.length, ax;
    while (L > 1 && arr.length) {
        what = a[--L];
        while ((ax= arr.indexOf(what)) !== -1) {
            arr.splice(ax, 1);
        }
    }
    return arr;
}

async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
      await callback(array[index], index, array);
    }
  }

  //function for ag grid
  function rowSelectedAfterRefresh(thisData, model, key) {
    const countRowdata = thisData.gridApi.getDisplayedRowCount();
    const vm = thisData;
    vm.gridApi.forEachNode((node) => {
        if (node.data) {
            if ((model[key] == undefined || model[key] == null) && node.rowIndex === 0 && vm.modeDataValue !== vm.global.modeData.delete) {
                node.setSelected(true, true);
                // console.log("a :"+node.data[key])
                // console.log("1 :"+model[key])
                return false;
            }
            else if (node.data[key] === model[key]) {
                if (vm.modeDataValue !== vm.global.modeData.delete) {
                    vm.gridApi.ensureIndexVisible(node.rowIndex, 'middle');
                    node.setSelected(true, true);
                    // console.log("b :"+node.data[key])
                    // console.log("2 :"+model[key])
                    return false;
                }
            }
            else if (vm.modeDataValue === vm.global.modeData.delete && countRowdata > 0 && (vm.global.rowIndexBeforeDelete === node.rowIndex || (vm.global.rowIndexBeforeDelete-1) === node.rowIndex )) {
                node.setSelected(true, true);
                vm.gridApi.ensureIndexVisible(node.rowIndex, 'middle');
                // console.log("c :"+node.data[key])
                // console.log("3 :"+model[key])
                return false;
            }
        }
    });
}

function getRowIndexBefore(thisData) {
    const vm = thisData;
    thisData.gridApi.forEachNode((node) => {
        if (node.isSelected()) {
            vm.global.rowIndexBeforeDelete = node.rowIndex;
        }
    });
}

function generateIconContextMenuAgGrid(icon) {
    var rootUrl = window.location.origin;
    return (
        '<img border="0" width="20" height="20" src="'+rootUrl+'/images/icons/' +
        icon +
        '.png"/>'
    );
}

function addDialogCloseButton(thisX, elementID, activeSync) {
    if(thisX.global.dialog.isAddHeaderCloseButton) {
        if (thisX.global.dialog.typeDialog === 'confirm') {
            const firstDialog = document.getElementById(elementID);
            if (firstDialog !== null) {
                const headerDialog = firstDialog.getElementsByClassName('vs-dialog');

                const vm = thisX;
                const newElement = document.createElement('i');
                newElement.className = 'vs-icon notranslate icon-scale vs-dialog-cancel vs-dialog-cancel--icon notranslate material-icons null';
                newElement.id = 'first-icon-dialog-close';
                newElement.innerText = 'close';
                newElement.addEventListener('click', () => {
                    vm[activeSync] = false;
                });
                headerDialog[0].children[0].appendChild(newElement);
            }
        }
    }
}

function addPopupCloseButton(thisX, elementID, activeSync) {
    if(thisX.global.dialog.isAddHeaderCloseButton) {
        if (thisX.global.dialog.typeDialog === 'confirm') {
            const firstDialog = document.getElementById(elementID);
            if (firstDialog !== null) {
                const headerDialog = firstDialog.getElementsByClassName('vs-dialog');

                const vm = thisX;
                const newElement = document.createElement('i');
                newElement.className = 'vs-icon notranslate icon-scale vs-dialog-cancel vs-dialog-cancel--icon notranslate material-icons null';
                newElement.id = 'first-icon-dialog-close';
                newElement.innerText = 'close';
                newElement.addEventListener('click', () => {
                    vm[activeSync] = false;
                });
                headerDialog[0].children[0].appendChild(newElement);
            }
        }
    }
}

function loadingLayoutIndicator(context) {
    const mainLayout = document.getElementById('layout--main');
    const isLoading = mainLayout.getElementsByClassName('con-vs-loading')
    if (isLoading.length > 0) {
        return;
    }
    context.$vs.loading({ container: '#layout--main', scale: context.global.scaleLoadingMainLayout });
}

function closeLoadingLayoutIndicator(context) {
    context.$vs.loading.close('#layout--main>.con-vs-loading');
}


export {
    dateDiff,
    getTime,
    cloneObject,
    removeArrayByKey,
    asyncForEach,
    rowSelectedAfterRefresh,
    getRowIndexBefore,
    generateIconContextMenuAgGrid,
    addDialogCloseButton,
    addPopupCloseButton,
    loadingLayoutIndicator,
    closeLoadingLayoutIndicator,
};
