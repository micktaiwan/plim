// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

function verify () {

  // does nothing for now
  var form = document.addform;
  form.onsubmit();
  return false;
   
  }


function job_input_key(event,object) {

  var k = event.keyCode;
  // Shift, Tab, backspace, del, <, >, Alt, F5, end, home
  if(k==16 || k==9 || k==8 || k==46 || k==37 || k==39 || k==18 || k==116 || k==35 ||  k==36) return;

  var form = document.addform;
  var job = form.job_job_type.value;
  var serial_len = get_serial_len(job); // generated
  var phone_len  = get_phone_len(job);  // generated

  switch(object.name) {
    case "job[serial]" :
     if(String(object.value).length == serial_len) {
      form.job_phone.focus();
      return false;
      }
     break;
    case "job[phone]" :
     if(String(object.value).length == phone_len) {
      form.job_ampm.focus();
      return false;
        }
     break;
    case "job[ampm]" : 
      if(String(object.value).length == 2 || event.keyCode==13) {
        if(String(object.value)=='00') object.value = '';
       return verify();
       }
      break;
    default:
      alert('unknown object.name = ' + object.name)
    }
  return true;
  }


function result_change(id) {
  if(id=="") return;
  new Ajax.Updater('reason_id', '/jobs/select_reason_list_from_result/'+id);
  }

