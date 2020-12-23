$(function(){

    chrome.storage.sync.get('limit',function(budget){
        $('#limit').val(budget.limit);
    });

    $('#saveLimit').click(function(){
        var limit = $('#limit').val();
        if (limit){
            chrome.storage.sync.set({'limit': limit}, function(){
                close();
            });
        }
    });

    $('#resetTotal').click(function(){
        chrome.storage.sync.set({'total': 0}, function(){
          
            var notifOptions = {
                type: "basic",
                iconUrl: "bm.png",
                title: "Reset the Total",
                message: "Total has been reseted to 0."
            };
           
            chrome.notifications.create('resetNotif', notifOptions);
            chrome.notifications.clear('resetNotif');
           
        });
    });
});