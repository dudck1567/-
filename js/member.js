// 이메일 도메인 표시

$('#domainlist').on('change', function(){
    var doval = $('#domainlist option:selected').val()
    if( doval !== 'noselect' && doval != 'self'){
        $('#emaildomain').val(doval)
    } else if(doval === 'noselect'){
        $('#emaildomain').attr({
            disabled:true
        }).val('')
    } else{
        $('#emaildomain').attr({
            disabled:false
        }).val('')
    }
})

// 메모 남은 글자 표기
$('#memo').on('keydown', function(){
    var memoleng = $(this).val().length
    var max = 10
    var remain = max - memoleng
    $('.remain').text(remain)
})

// 생년월일 칸에 datepicker 연결하기
$('#birth').datepicker({
    dateFormat:'yy-mm-dd',
    changeMonth:true,
    changeYear:true,
    yearRange:'1900:2021'
})