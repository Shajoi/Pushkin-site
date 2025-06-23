function openModal() {
    document.getElementById('modalformfeedback').style.display = 'block';}
function closeModal() {
    document.getElementById('modalformfeedback').style.display = 'none';}
const BOT_TOKEN = 'токен';
const CHAT_ID = 'айди чата';
$('#feedbackForm').submit(function(event) {
    event.preventDefault();
    let name = $('.input-name').val();
    let lastName = $('.input-lastname').val();
    let feedback = $('.input-feedback').val();
    $.ajax({
        url: "https://api.telegram.org/bot"+BOT_TOKEN+"/sendMessage?chat_id="+CHAT_ID,
        method: "POST",
        data: {
            chat_id: CHAT_ID,
            text: ('Поступил отзыв!\nИмя: '+name + '\n' + 'Фамилия: ' + lastName + '\n' + 'Отзыв: ' + feedback)
        },
        success: function() {
            alert('Отзыв отправлен!');
            closeModal();}
        });
    });