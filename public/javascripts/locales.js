if (!window.I18n) { I18n = {}; }

I18n.defaultLocale = "en";

I18n.translations = {"en": {"nil_result": "", "menu_zones": "Regions", "error": "Error", "code": "Code", "datetime": {"prompts": {"month": "Month", "minute": "Minute", "year": "Year", "second": "Seconds", "hour": "Hour", "day": "Day"}, "distance_in_words": {"over_x_years": {"one": "over 1 year", "other": "over {{count}} years"}, "about_x_hours": {"one": "about 1 hour", "other": "about {{count}} hours"}, "x_days": {"one": "1 day", "other": "{{count}} days"}, "less_than_x_minutes": {"one": "less than a minute", "other": "less than {{count}} minutes"}, "about_x_months": {"one": "about 1 month", "other": "about {{count}} months"}, "x_minutes": {"one": "1 minute", "other": "{{count}} minutes"}, "x_seconds": {"one": "1 second", "other": "{{count}} seconds"}, "x_months": {"one": "1 month", "other": "{{count}} months"}, "less_than_x_seconds": {"one": "less than 1 second", "other": "less than {{count}} seconds"}, "about_x_years": {"one": "about 1 year", "other": "about {{count}} years"}, "half_a_minute": "half a minute"}}, "create_new_job_type": "Create Job type", "phone_length": "Phone length", "choose": "= Choose =", "search_by_serial": "Search by serial", "serial_not_found": "Serial not found", "viewer": "Viewer", "create_customer": "Enter new customer data", "admin_menu_section": "Administration", "create_new_employee": "Create employee", "search_not_found": "Not found", "pwd": "Password", "problem_customer": "Contact", "reason": "Reason", "confirm_pwd": "Confirm password", "is_adjourner": "this result is an adjourner", "add_exception": "Add an exception", "problems": "Problems", "taiwanid": "ID number", "menu_customers": "Customers", "logged_out": "You have been logged out.", "edit_job_type": "Edit Job type", "can_not_be_blank": "can not be blank", "person_name": "Name", "email": "Email", "serial_length": "Serial length", "menu_home": "Home", "search_customer_explaination": "The result needs a related customer", "codes": "Codes", "site_title": "PLIM - Phone Line Installation Manager", "adjourn": "adjourn", "home_phone": "Home phone", "edit_zone": "Edit region", "ampm": "AMPM", "menu_action_log": "Activity log", "time": {"am": "am", "formats": {"short": "%d %b %H:%M", "long": "%B %d, %Y %H:%M", "time": "%H:%M", "default": "%a, %d %b %Y %H:%M:%S %z"}, "pm": "pm"}, "sort_by": "Sort by", "create_new_result": "Create result", "memo": "Memo", "search": "Search", "menu_sms": "SMS", "connected_users": "Connected users", "fromdate": "From date", "account": "Account", "edit_result": "Edit results", "language": "Language", "name": "Name", "problem_type": "Problem type", "results": "Results", "send_data": "Send", "code_list": "Code list", "menu_company": "Company", "menu_employees": "Employees", "zone": "Region", "edit_user": "Edit account", "edit_code": "Editing code", "date": {"order": ["year", "month", "day"], "abbr_day_names": ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], "day_names": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], "formats": {"short": "%b %d", "long": "%B %d, %Y", "default": "%Y-%m-%d"}, "abbr_month_names": [null, "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], "month_names": [null, "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]}, "search_by_phone": "Search by phone", "birthday": "Birthday", "problem_type_resolver": "Resolver", "problem_type_normal": "Normal", "login_failed": "Login failed", "updated_at": "updated at", "todate": "To date", "job_search": "Search", "role": "Role", "create_new_zone": "Create region", "help_search": "blank fieds values means all (do not filter)", "sms_content": "Message", "serial": "Serial", "today": "today", "activerecord": {"errors": {"models": {"employee": {"attributes": {"taiwanid": {"taken": "is already taken"}, "team": {"taken": "already exists"}, "name": {"blank": "can not be blank"}}}, "zone": {"attributes": {"code": {"taken": "already exists", "too_short": "is too short"}, "name": {"too_short": "is too short"}}}, "serial": {"attributes": {"serial": {"blank": "can not be blank"}}}, "user": {"attributes": {"password": {"too_short": "is too short", "blank": "can not be blank", "confirmation": "does not match the confirmation"}, "password_confirmation": {"blank": "can not be blank"}, "email": {"taken": "is already taken", "too_short": "is too short", "blank": "can not be blank"}, "login": {"taken": "is already taken", "too_short": "is too short", "blank": "can not be blank"}}}, "phone": {"attributes": {"phone": {"blank": "can not be blank"}}}}, "template": {"body": "Please correct these errors.", "header": "Some errors occured"}, "messages": {"even": "must be even", "greater_than_or_equal_to": "must be greater than or equal to {{count}}", "inclusion": "is not included in the list", "equal_to": "must be equal to {{count}}", "empty": "can't be empty", "accepted": "must be accepted", "less_than": "must be less than {{count}}", "invalid": "is invalid", "wrong_length": "is the wrong length (should be {{count}} characters)", "exclusion": "is reserved", "not_a_number": "is not a number", "taken": "has already been taken", "less_than_or_equal_to": "must be less than or equal to {{count}}", "too_short": "is too short (minimum is {{count}} characters)", "blank": "can't be blank", "odd": "must be odd", "too_long": "is too long (maximum is {{count}} characters)", "greater_than": "must be greater than {{count}}", "confirmation": "doesn't match confirmation"}}}, "job_already_exists": "This job already exists", "login": "Login", "mdate": "Date", "none": "==None==", "edit_employee": "Edit employee", "all": "All", "phone_length_error": "Phone length error", "create_new_code": "Create a new code", "menu_send_sms": "Send SMS", "support": {"array": {"words_connector": ", ", "two_words_connector": " and ", "last_word_connector": ", and "}}, "exceptions": "Exceptions", "create_time": "Creation time", "welcome": "Welcome", "result_input": "Result input", "admin": "Admin", "site_menu_section": "Site", "jobs": "Jobs", "create_new_user": "Create a new user", "no_record_found": "No record found", "created_msg": "Created!", "confirm_action": "Are you sure ?", "problem_type_problem": "Problem", "length_exceptions_by_zone": "Exceptions by zone", "phone_not_found": "Phone not found", "serial_length_error": "Serial length error", "no_result_jobs": "Job without results", "job_type": "Job type", "last_edit_time": "Edit time", "too_many_records": "Error! Too many records for this search", "notice": "Notice", "order": "Order", "edit_code_list": "Editing code list", "create_new_code_list": "Create a new code list", "menu_problems": "Problems", "search_or_add_customer": "Search or add customer", "phone": "Phone", "team": "Team", "menu_job_types": "Job types", "customer": "Customer", "result": "Result", "menu_users": "Site accounts", "logout": "Logout", "address": "Address", "job_input": "New job", "menu_codes": "Codes", "editor": "Editor", "number": {"percentage": {"format": {"delimiter": ""}}, "format": {"separator": ".", "delimiter": ",", "precision": 3}, "currency": {"format": {"separator": ".", "format": "%u%n", "delimiter": ",", "precision": 2, "unit": "$"}}, "precision": {"format": {"delimiter": ""}}, "human": {"storage_units": {"units": {"gb": "GB", "byte": {"one": "Byte", "other": "Bytes"}, "tb": "TB", "kb": "KB", "mb": "MB"}, "format": "%n %u"}, "format": {"delimiter": "", "precision": 1}}}, "edit": "Edit", "menu_results": "Results", "logged_in": "You are logged in.", "reason_list": "Reason list", "cell": "Cell number", "delete": "Delete", "created_at": "created at", "edited_msg": "Edited!"}, "zh": {"nil_result": "", "menu_zones": "\u5730\u5340\u7ba1\u7406", "error": "\u932f\u8aa4", "code": "\u4ee3\u78bc", "datetime": {"distance_in_words": {"over_x_years": {"one": "\u8d85\u904e 1 \u5e74", "other": "\u8d85\u904e {{count}} \u5e74"}, "about_x_hours": {"one": "\u7d04 1 \u5c0f\u6642", "other": "\u7d04 {{count}} \u5c0f\u6642"}, "x_days": {"one": "1 \u5929", "other": "{{count}} \u5929"}, "less_than_x_minutes": {"one": "\u5c0f\u65bc 1 \u5206\u9418", "other": "\u5c0f\u65bc {{count}} \u5206\u9418"}, "about_x_months": {"one": "\u7d04 1 \u500b\u6708", "other": "\u7d04 {{count}} \u500b\u6708"}, "x_minutes": {"one": "1 \u5206\u9418", "other": "{{count}} \u5206\u9418"}, "x_months": {"one": "1 \u500b\u6708", "other": "{{count}} \u500b\u6708"}, "x_seconds": {"one": "1 \u79d2", "other": "{{count}} \u79d2"}, "less_than_x_seconds": {"one": "\u5c0f\u65bc 1 \u79d2", "other": "\u5c0f\u65bc {{count}} \u79d2"}, "about_x_years": {"one": "\u7d04 1 \u5e74", "other": "\u7d04 {{count}} \u5e74"}, "half_a_minute": "\u534a\u5206\u9418"}}, "create_new_job_type": "\u65b0\u5efa\u806f\u55ae\u985e\u578b", "phone_length": "\u96fb\u8a71\u9577\u5ea6", "choose": "=\u9078\u64c7=", "search_by_serial": "\u4ee5\u806f\u55ae\u865f\u78bc\u67e5\u8a62", "serial_not_found": "\u627e\u4e0d\u5230\u9019\u500b\u806f\u55ae\u865f\u78bc", "viewer": "\u6d41\u89bd\u8005", "create_customer": "\u65b0\u5efa\u5ba2\u6236", "admin_menu_section": "\u7db2\u7ad9\u7ba1\u7406", "create_new_employee": "\u65b0\u5efa\u8077\u54e1", "search_not_found": "\u6c92\u6709\u627e\u5230", "pwd": "\u5bc6\u78bc", "problem_customer": "\u806f\u7d61\u5ba2\u6236", "reason": "\u539f\u56e0", "confirm_pwd": "\u78ba\u8a8d\u5bc6\u78bc", "is_adjourner": "\u4f7f\u7528\u9019\u500b\u7d50\u679c\u7684\u806f\u55ae\u53ef\u4ee5\u5ef6\u9072", "add_exception": "\u65b0\u5efa\u9577\u5ea6\u4f8b\u5916", "problems": "\u969c\u7919\u7ba1\u7406", "taiwanid": "\u8eab\u5206\u8b49\u5b57\u865f", "menu_customers": "\u5ba2\u6236\u7ba1\u7406", "logged_out": "\u60a8\u5df2\u7d93\u767b\u51fa", "edit_job_type": "\u7de8\u8f2f\u806f\u55ae\u985e\u578b", "can_not_be_blank": "\u4e0d\u80fd\u7a7a\u767d", "person_name": "\u59d3\u540d", "email": "\u96fb\u5b50\u90f5\u4ef6", "serial_length": "\u806f\u55ae\u9577\u5ea6", "menu_home": "\u56de\u5230\u9996\u9801", "search_customer_explaination": "\u7d50\u679c\u9700\u8981\u5ba2\u6236", "codes": "\u4ee3\u78bc", "site_title": "PLIM - \u96fb\u8a71\u7dda\u5b89\u88dd\u7ba1\u7406\u7cfb\u7d71", "adjourn": "\u5ef6\u9072", "home_phone": "\u5c45\u5bb6\u96fb\u8a71", "edit_zone": "\u7de8\u8f2f\u5730\u5340", "ampm": "\u4e0a\u4e0b", "menu_action_log": "\u7db2\u7ad9\u8a2a\u554f", "time": {"am": "AM", "formats": {"short": "%b%d\u65e5 %H:%M", "long": "%Y\u5e74%b%d\u65e5 %H:%M", "time": "%H:%M", "default": "%Y\u5e74%b%d\u65e5 %A %H:%M:%S %Z"}, "pm": "PM"}, "sort_by": "\u6392\u5e8f", "create_new_result": "\u65b0\u5efa\u7d50\u679c", "memo": "\u5099\u8a3b", "search": "\u67e5\u8a62", "menu_sms": "\u7c21\u8a0a", "connected_users": "\u7dda\u4e0a\u4f7f\u7528\u8005", "fromdate": "\u5f9e\u65e5\u671f", "account": "\u767b\u9304\u5e33\u6236", "edit_result": "\u7de8\u8f2f\u7d50\u679c", "language": "\u8a9e\u8a00", "name": "\u540d\u5b57", "problem_type": "\u969c\u7919\u985e\u5225", "results": "\u7d50\u679c", "send_data": "\u78ba\u8a8d", "code_list": "\u4ee3\u78bc\u76ee\u9304", "menu_company": "Company", "menu_employees": "\u516c\u53f8\u8077\u54e1", "zone": "\u5730\u5340", "edit_user": "\u7de8\u8f2f\u5e33\u6236", "edit_code": "\u7de8\u8f2f\u4ee3\u78bc", "date": {"order": ["year", "month", "day"], "abbr_day_names": ["\u65e5", "\u4e00", "\u4e8c", "\u4e09", "\u56db", "\u4e94", "\u516d"], "day_names": ["\u661f\u671f\u65e5", "\u661f\u671f\u4e00", "\u661f\u671f\u4e8c", "\u661f\u671f\u4e09", "\u661f\u671f\u56db", "\u661f\u671f\u4e94", "\u661f\u671f\u516d"], "abbr_month_names": [null, "1\u6708", "2\u6708", "3\u6708", "4\u6708", "5\u6708", "6\u6708", "7\u6708", "8\u6708", "9\u6708", "10\u6708", "11\u6708", "12\u6708"], "formats": {"short": "%b%d\u65e5", "long": "%Y\u5e74%b%d\u65e5", "default": "%Y-%m-%d"}, "month_names": [null, "\u4e00\u6708", "\u4e8c\u6708", "\u4e09\u6708", "\u56db\u6708", "\u4e94\u6708", "\u516d\u6708", "\u4e03\u6708", "\u516b\u6708", "\u4e5d\u6708", "\u5341\u6708", "\u5341\u4e00\u6708", "\u5341\u4e8c\u6708"]}, "search_by_phone": "\u4ee5\u96fb\u8a71\u865f\u78bc\u67e5\u8a62", "birthday": "\u51fa\u751f\u5e74\u6708\u65e5", "problem_type_resolver": "\u4fee\u5fa9", "problem_type_normal": "\u6b63\u5e38", "login_failed": "\u767b\u9304\u5931\u6557", "updated_at": "\u66f4\u65b0\u65bc", "todate": "\u5230\u65e5\u671f", "job_search": "\u806f\u55ae\u67e5\u8a62", "role": "\u4f5c\u7528", "create_new_zone": "\u65b0\u5efa\u5730\u5340", "help_search": "\u7a7a\u767d\u7b49\u65bc\u6240\u6709", "sms_content": "\u7c21\u8a0a", "serial": "\u806f\u55ae\u865f\u78bc", "today": "\u4eca\u5929", "activerecord": {"errors": {"models": {"employee": {"attributes": {"taiwanid": {"taken": "\u5df2\u7d93\u5b58\u5728"}, "team": {"taken": "\u5df2\u7d93\u5b58\u5728"}, "name": {"blank": "\u4e0d\u80fd\u7a7a\u767d"}}}, "zone": {"attributes": {"code": {"taken": "\u5df2\u7d93\u5b58\u5728", "too_short": "\u592a\u77ed"}, "name": {"too_short": "\u592a\u77ed"}}}, "serial": {"attributes": {"serial": {"blank": "\u4e0d\u80fd\u7a7a\u767d"}}}, "user": {"attributes": {"password": {"too_short": "\u592a\u77ed", "blank": "\u4e0d\u80fd\u7a7a\u767d", "confirmation": "\u4e0d\u76f8\u914d"}, "password_confirmation": {"blank": "\u4e0d\u80fd\u7a7a\u767d"}, "email": {"taken": "\u5df2\u7d93\u5b58\u5728", "too_short": "\u592a\u77ed", "blank": "\u4e0d\u80fd\u7a7a\u767d"}, "login": {"taken": "\u5df2\u7d93\u5b58\u5728", "too_short": "\u592a\u77ed", "blank": "\u4e0d\u80fd\u7a7a\u767d"}}}, "phone": {"attributes": {"phone": {"blank": "\u4e0d\u80fd\u7a7a\u767d"}}}}, "template": {"body": "\u8acb\u66f4\u6b63\u9019\u4e9b\u932f\u8aa4", "header": "\u4e00\u4e9b\u932f\u8aa4\u767c\u751f"}}}, "job_already_exists": "\u8cc7\u6599\u5df2\u7d93\u5b58\u5728", "login": "\u767b\u9304", "mdate": "\u65e5\u671f", "none": "==\u7121==", "edit_employee": "\u7de8\u8f2f\u8077\u54e1", "all": "\u6240\u6709", "phone_length_error": "\u96fb\u8a71\u9577\u5ea6\u932f\u8aa4", "create_new_code": "\u65b0\u5efa\u4ee3\u78bc", "menu_send_sms": "\u9001\u7c21\u8a0a", "exceptions": "\u4f8b\u5916", "create_time": "\u65b0\u5efa\u6642\u9593", "welcome": "\u6b61\u8fce", "result_input": "\u7d50\u679c\u9375\u6a94", "admin": "\u7ba1\u7406\u8005", "site_menu_section": "\u7db2\u7ad9", "jobs": "\u806f\u55ae", "create_new_user": "\u65b0\u5efa\u7db2\u7ad9\u5e33\u6236", "no_record_found": "\u4f7f\u7528\u9019\u4e9b\u689d\u4ef6\u627e\u4e0d\u5230\u806f\u55ae\u8a18\u9304", "created_msg": "\u5df2\u5efa\u7acb", "confirm_action": "\u60a8\u78ba\u5b9a?", "problem_type_problem": "\u969c\u7919", "length_exceptions_by_zone": "\u5730\u5340\u9577\u5ea6\u4f8b\u5916", "phone_not_found": "\u627e\u4e0d\u5230\u9019\u500b\u96fb\u8a71\u865f\u78bc", "serial_length_error": "\u806f\u55ae\u9577\u5ea6\u932f\u8aa4", "no_result_jobs": "\u7d50\u679c\u4e0d\u660e\u806f\u55ae", "job_type": "\u806f\u55ae\u985e\u578b", "last_edit_time": "\u7de8\u8f2f\u6642\u9593", "too_many_records": "\u932f\u8aa4: \u7528\u9019\u4e9b\u689d\u4ef6\u8fd4\u56de\u592a\u591a\u8a18\u9304", "notice": "\u901a\u77e5", "order": "\u9806\u5e8f", "edit_code_list": "\u7de8\u8f2f\u4ee3\u78bc\u76ee\u9304", "create_new_code_list": "\u65b0\u5efa\u4ee3\u78bc\u76ee\u9304", "menu_problems": "\u969c\u7919\u7ba1\u7406", "search_or_add_customer": "\u67e5\u8a62\u6216\u589e\u52a0\u5ba2\u6236", "phone": "\u96fb\u8a71\u865f\u78bc", "team": "\u73ed\u5225", "customer": "\u5ba2\u6236", "result": "\u7d50\u679c", "menu_job_types": "\u806f\u55ae\u985e\u578b", "menu_users": "\u7db2\u7ad9\u5e33\u6236", "logout": "\u767b\u51fa", "address": "\u5730\u5740", "job_input": "\u806f\u55ae\u9375\u6a94", "menu_codes": "\u539f\u56e0\u7ba1\u7406", "editor": "\u7de8\u8f2f\u8005", "edit": "\u7de8\u8f2f", "menu_results": "\u7d50\u679c\u7ba1\u7406", "logged_in": "\u60a8\u5df2\u7d93\u767b\u9304", "reason_list": "\u539f\u56e0\u76ee\u9304", "cell": "\u884c\u52d5\u96fb\u8a71", "delete": "\u522a\u9664", "created_at": "\u5efa\u65bc", "edited_msg": "\u5df2\u7de8\u8f2f"}};

(function(){

  var interpolatePattern = /\{\{([^}]+)\}\}/g;

  //Replace {{foo} with obj.foo
  function interpolate(str, obj){
    return str.replace(interpolatePattern, function(){
      return obj[arguments[1]] || arguments[0];
    });
  };

  //Split "foo.bar" to ["foo", "bar"] if key is a string
  function keyToArray(key){
    if (!key) return [];
    if (typeof key != "string") return key;
    return key.split('.');
  };

  function locale(){
    return I18n.locale || I18n.defaultLocale;
  };

  function getLocaleFromCookie(){
    var cookies = document.cookie.split(/\s*;\s*/),
        i, pair, locale;
    for (i = 0; i < cookies.length; i++) {
      pair = cookies[i].split('=');
      if (pair[0] === 'locale') { locale = pair[1]; break; }
    }
    return locale;
  };


  I18n.init = function(){
    this.locale = getLocaleFromCookie();
  };

  //Works mostly the same as the Ruby equivalent, except there are
  //no symbols in JavaScript, so keys are always strings. The only time
  //this makes a difference is when differentiating between keys and values
  //in the defaultValue option. Strings starting with ":" will be considered
  //to be keys and used for lookup, while other strings are returned as-is.
  I18n.translate = function(key, opts){
    if (typeof key != "string") { //Bulk lookup
      var a = [], i;
      for (i=0; i<key.length; i++) {
        a.push(this.translate(key[i], opts));
      }
      return a;
    } else {
      opts = opts || {};
      opts.defaultValue = opts.defaultValue || null;
      key = keyToArray(opts.scope).concat(keyToArray(key));
      var value = this.lookup(key, opts.defaultValue);
      if (typeof value != "string" && value) value = this.pluralize(value, opts.count);
      if (typeof value == "string") value = interpolate(value, opts);
      return value;
    }
  };

  I18n.t = I18n.translate;

  //Looks up a translation using an array of strings where the last
  //is the key and any string before that define the scope. The current
  //locale is always prepended and does not need to be provided. The second
  //parameter is an array of strings used as defaults if the key can not be
  //found. If a key starts with ":" it is used as a key for lookup.
  //This method does not perform pluralization or interpolation.
  I18n.lookup = function(keys, defaults){
    var i = 0, value = this.translations[locale()];
    defaults = typeof defaults == "string" ? [defaults] : (defaults || []);
    while (keys[i]) {
      value = value && value[keys[i]];
      i++;
    }
    if (value){
      return value;
    } else {
      if (defaults.length == 0) {
        return null;
      } else if (defaults[0].substr(0,1) == ':') {
        return this.lookup(keys.slice(0,keys.length-1).concat(keyToArray(defaults[0].substr(1))), defaults.slice(1));
      } else {
        return defaults[0];
      }
    }
  };

  I18n.pluralize = function(value, count){
    if (!count) return value;
    return count == 1 ? value.one : value.other;
  };

})();

I18n.init();
