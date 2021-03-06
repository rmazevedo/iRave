function loadData() {
  var retrievedObject = localStorage.getItem('shows');
  var shows = JSON.parse(retrievedObject);

  if(!shows){
    var shows = [
        { 'id': 0, 'band': "Red Hot Chili Peppers", 'day': 1, 'start_time': "23:00", 'end_time': "00:30", 'stage': "1", 'notify': false },
        { 'id': 1, 'band': "Eminem", 'day': 1, 'start_time': "23:00", 'end_time': "00:30", 'stage': "2", 'notify': false },
        { 'id': 2, 'band': "Metallica", 'day': 1, 'start_time': "22:00", 'end_time': "23:00", 'stage': "3", 'notify': false },
        { 'id': 3, 'band': "Katy Perry", 'day': 1, 'start_time': "22:00", 'end_time': "23:00", 'stage': "4", 'notify': false },

    ];

    // Put the object into storage

    localStorage.setItem('shows', JSON.stringify(shows));

  }

}

function changeFormat(){
  document.getElementById("bt").innerHTML='check';
  //window.onload();


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

    var timer = setInterval(showAlert, 5000);
    //location.reload();
}


function loadStage(stage) {
    var retrievedObject = localStorage.getItem('shows');
    var shows = JSON.parse(retrievedObject);

    for (var i = 0; i < shows.length; i++) {
        if (shows[i].stage == stage) {
          if(shows[i].notify){
            var html = '<div class="item" id="myAnchor1' + shows[i].id + '">' +
                '<h3>' + shows[i].start_time + ' - ' + shows[i].end_time + '</h3>' +
                '<h2>' + shows[i].band + '</h2>' +
                '<button class="btn-icon" type="button" name="button" onclick="addNotification(' + shows[i].id + '),changeFormat()">' +
                '<i id="bt" class="material-icons">check</i>' +
                '</button>' +
                '</div >';
          } else {
            var html = '<div class="item" id="myAnchor1' + shows[i].id + '">' +
                '<h3>' + shows[i].start_time + ' - ' + shows[i].end_time + '</h3>' +
                '<h2>' + shows[i].band + '</h2>' +
                '<button class="btn-icon" type="button" name="button" onclick="addNotification(' + shows[i].id + '),changeFormat()">' +
                '<i id="bt" class="material-icons">notifications</i>' +
                '</button>' +
                '</div >';
            $(".content").append(html);
          }

      $(".content").append(html);

        }
    }
}

function showAlert(){
  document.getElementById("alertsuccess").style.display="block";
}

function closeAlert(){
  var div1 = document.getElementById("alertsuccess");
  div1.style.opacity='0';
  setTimeout(function(){div1.style.display="none";},600);
}
