function verify() {

  var form  = document.addform;
  var job   = form.job_job_type.value;
  var zone  = form.job_zone.value;
  var serial_len = get_serial_len(job,zone); // generated
  var phone_len  = get_phone_len(job,zone);  // generated

  $('error_frame').hide();     
  $('error_serial').hide();     
  $('error_phone').hide();     
  //$('error_ampm').hide();     

  if(String(form.job_serial.value).length != serial_len) {
    $('error_serial').show();
    //alert(I18n.t('serial_length_error'));
    form.job_serial.focus();
    return false;
    }
  if(String(form.job_phone.value).length != phone_len) {
    $('error_phone').show();
    //alert(I18n.t('phone_length_error'));
    form.job_phone.focus();
    return false;
    }
/*
  if(String(form.job_ampm.value).length != 2) {
    $('error_ampm').show();
    //alert(I18n.t('phone_length_error'));
    form.job_ampm.focus();
    return false;
    }
  if(String(form.job_ampm.value)=='00') form.job_ampm.value = '';
*/

  new Ajax.Request('/jobs/create', {asynchronous:true, evalScripts:true, onLoading:function(request){$('loading').show()}, parameters:Form.serialize(form)});
  return false;
   
  }


function job_input_key(event,object) {

  var k = event.keyCode;
  //alert(k);
  // Shift, Tab, backspace, del, <, >, Alt, F5, end, home
  if(k==16 || k==9 || k==8 || k==46 || k==37 || k==38 || k==39 || k==40 || k==18 || k==116 || k==35 ||  k==36) return;

  var form = document.addform;
  var job = form.job_job_type.value;
  var zone = form.job_zone.value;
  var serial_len = get_serial_len(job,zone); // generated
  var phone_len  = get_phone_len(job,zone);  // generated

  switch(object.name) {
    case "job[serial]" :
      if(String(object.value).length <= serial_len) $('error_serial').hide();
      else $('error_serial').show();     
      if(String(object.value).length >= serial_len) {
        form.job_phone.focus();
        return false;
        }
      break;
    case "job[phone]" :
      if(String(object.value).length <= phone_len) $('error_phone').hide();
      else $('error_phone').show();     
      if(String(object.value).length >= phone_len) {
        return verify();
        //form.job_ampm.focus();
        }
      break;
/*
    case "job[ampm]" : 
      if(String(object.value).length >= 2 || event.keyCode==13) {
        return verify();
        }
      break;
*/
    default:
      alert('unknown object.name = ' + object.name);
    }
  return true;
  }

// when the result type is selected, display the correpondong reason list
function result_change(id) {
  if(id=="") return;
  // update the reason field
  new Ajax.Updater('reason_id', '/jobs/select_reason_list_from_result/'+id);
  // update the customer list for this phone number
  var phone = $('phone').value
  if(phone == "") alert('no phone!')
  else update_customer_list(phone);
  }

function update_customer_list(phone) {
  new Ajax.Updater('customer_list', '/jobs/search_customers/?phone='+phone);
}

// when fired, try to get information on a job from the page and displays corresponding jobs
function update_job_list() {
  team = $('team').value
  date = $('date').value
  phone = $('phone').value
  new Ajax.Updater('job_list', '/jobs/search_jobs/?team='+team+'&date='+date+'&phone='+phone);
}

