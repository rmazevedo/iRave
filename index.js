function loadData() {
    var shows = [
        { 'id': 0, 'band': "Beatles", 'day': 2, 'start_time': "23:00", 'end_time': "00:30", 'stage': "3", 'notify': true },
        { 'id': 1, 'band': "Rihana", 'day': 1, 'start_time': "23:00", 'end_time': "00:30", 'stage': "3", 'notify': false },
        { 'id': 2, 'band': "Justin Bieber", 'day': 1, 'start_time': "22:00", 'end_time': "23:00", 'stage': "3", 'notify': false },
        { 'id': 3, 'band': "Beyoncé", 'day': 1, 'start_time': "22:00", 'end_time': "23:00", 'stage': "1", 'notify': false },

    ];

    // Put the object into storage
    localStorage.setItem('shows', JSON.stringify(shows));
}

function loadNotifications() {
    var retrievedObject = localStorage.getItem('shows');
    var shows = JSON.parse(retrievedObject);

    var hasCarouselActive = false;
    for (var i = 0; i < shows.length; i++) {
        if (shows[i].notify) {
            if (!hasCarouselActive) {
                var html = '<div class="item  item-notification active"' + 'id="notification-' + shows[i].id + '">' +
                    '<h2 style="height:0.2in">' + shows[i].band + '</h2>' +
                    '<p>' +
                    '<i class="material-icons">date_range</i> Dia' + shows[i].day +
                    '<br>' +
                    '<i class="material-icons">access_time</i> ' + shows[i].start_time + ' - ' + shows[i].end_time +
                    '<br>' +
                    '<i class="material-icons">location_on</i> Palco ' + shows[i].stage +
                    '</p >' +
                    '<button class="btn-icon" type="button" name="button" onclick="deleteNotification(' + shows[i].id + ')">' +
                    '<i class="material-icons">delete</i>' +
                    '</button>' +
                    '</div >';
                hasCarouselActive = true;
            } else {
                var html = '<div class="item  item-notification"' + 'id="notification-' + shows[i].id + '">' +
                    '<h2 style="height:0.2in">' + shows[i].band + '</h2>' +
                    '<p>' +
                    '<i class="material-icons">date_range</i> Dia' + shows[i].day +
                    '<br>' +
                    '<i class="material-icons">access_time</i> ' + shows[i].start_time + ' - ' + shows[i].end_time +
                    '<br>' +
                    '<i class="material-icons">location_on</i> Palco ' + shows[i].stage +
                    '</p >' +
                    '<button class="btn-icon" type="button" name="button" onclick="deleteNotification(' + shows[i].id + ')">' +
                    '<i class="material-icons">delete</i>' +
                    '</button>' +
                    '</div >'
            }
            $(".carousel-inner").append(html);
        }
    }
    if (!hasCarouselActive) {
        $(".carousel-inner").append('<div class="item  item-notification active" id="no-notification">' +
            '<h2 style="height:0.2in"></h2>' +
            '<p style="text-align:center;">' +
            'Sem notificações' +
            '</p >' +
            '</div >');
    }
}

function goBack() {
    window.history.back();
}

function goHome() {
    window.location.href = "index.html";
}

function deleteNotification(id) {
    var retrievedObject = localStorage.getItem('shows');
    var shows = JSON.parse(retrievedObject);
    shows[id].notify = false;

    localStorage.setItem('shows', JSON.stringify(shows));
    location.reload();
}


function addNotification(id) {
    var retrievedObject = localStorage.getItem('shows');
    var shows = JSON.parse(retrievedObject);
    shows[id].notify = true;

    localStorage.setItem('shows', JSON.stringify(shows));
    location.reload();
}