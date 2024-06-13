$(function() {

    $('form').on('submit', function (e){
        e.preventDefault()
    })

    // Prepare icons
    var icons = {
        'magic': 'data:image/png;base64,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'
      , 'ranged': 'data:image/png;base64,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'
      , 'melee': 'data:image/png;base64,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'
      , 'necromancy': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG0AAAB9CAMAAACf8B3/AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAwBQTFRFAAAA0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/yYNwhQAAAQB0Uk5TAAECAwUGBwgECQwQFBgbHSAhIg0TKjI5P0RITE5PIys2Q1BcZ3F5f4WJi4w3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'
    }

    var $body = $('body')
      , $iconNecro = $('.necromancy')
      , $iconMelee = $('.melee')
      , $iconMagic = $('.magic')
      , $iconRanged = $('.ranged')

    $.each(icons, function (key, data) {
        $('.' + key + ' img').attr('src', data)
    })


    // create & download
    $('#create-icon').show().on('click', async function downloadIcon() {
        const data = await html2canvas(document.querySelector('#wrapper'));
        data.toBlob(function(blob) {
            const filename = $('.icon-title').text()
            saveAs(blob, filename + '.png');
        })
    })


    // Live update title
    $('#iconTitle').on('input', function() {
        val = this.value
        $('.icon-title').text(val)
    })

    // Live update magic
    $('#magic').on('change', function() {
        if ($(this).is(':checked')) {
            $iconMagic.show()
        } else {
            $iconMagic.hide()
        }
        checkToHideGradient()
    })

    // Live update ranged
    $('#ranged').on('change', function() {
        if ($(this).is(':checked')) {
            $iconRanged.show()
        } else {
            $iconRanged.hide()
        }
        checkToHideGradient()
    })

    // Live update melee
    $('#melee').on('change', function() {
        if ($(this).is(':checked')) {
            $iconMelee.show()
        } else {
            $iconMelee.hide()
        }
        checkToHideGradient()
    })

    // Live update necromancy
    $('#necromancy').on('change', function() {
        if ($(this).is(':checked')) {
            $iconNecro.show()
        } else {
            $iconNecro.hide()
        }
        checkToHideGradient()
    })

    function checkToHideGradient() {
        if($('.icons').children(':visible').length == 0) {
            $('body').addClass('no-gradient')
        } else {
            $('body').removeClass('no-gradient')
        }
    }

})

function dragElement(elmnt) {
    var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;

    elmnt.onmousedown = dragMouseDown;

    elmnt.addEventListener('wheel', (e) => {
        e.preventDefault()
        var img = $(elmnt).find('img')
        var currentSize = img.width()
        if (e.deltaY > 0) {
            img.width(currentSize + 10)
        } else {
            img.width(currentSize - 10)
        }
    })

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + 'px';
        elmnt.style.left = (elmnt.offsetLeft - pos1) + 'px';
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}


// Add images from file
function iconUpload(itemName, blur) {
    var elementId = 'icon-' + itemName
    var filesSelected = document.getElementById(elementId + '-uploader').files
    if (filesSelected.length > 0) {
        var fileToLoad = filesSelected[0]

        var fileReader = new FileReader()

        var newImage = document.createElement('img')

        fileReader.onload = function(fileLoadedEvent) {
            var srcData = fileLoadedEvent.target.result

            newImage.src = srcData
            var iconItem = document.getElementById('icon-' + itemName)
            iconItem.append(newImage)
            iconItem.innerHTML = newImage.outerHTML
        }
        fileReader.readAsDataURL(fileToLoad)

        dragElement(document.getElementById(elementId))
    }
}