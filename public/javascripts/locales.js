if (!window.I18n) { I18n = {}; }

I18n.defaultLocale = "en";

I18n.translations = {"zh": {"time": {"am": "AM", "formats": {"time": "%H:%M", "short": "%b%d\u65e5 %H:%M", "long": "%Y\u5e74%b%d\u65e5 %H:%M", "default": "%Y\u5e74%b%d\u65e5 %A %H:%M:%S %Z"}, "pm": "PM"}, "result_input": "\u7d50\u679c\u9375\u6a94", "admin": "\u7ba1\u7406\u8005", "site_menu_section": "\u7db2\u7ad9", "jobs": "\u806f\u55ae", "language": "\u8a9e\u8a00", "create_new_user": "\u65b0\u5efa\u7db2\u7ad9\u5e33\u6236", "all": "\u6240\u6709", "no_record_found": "\u4f7f\u7528\u9019\u4e9b\u689d\u4ef6\u627e\u4e0d\u5230\u806f\u55ae\u8a18\u9304", "created_msg": "\u5df2\u5efa\u7acb", "confirm_action": "\u60a8\u78ba\u5b9a?", "phone_not_found": "\u627e\u4e0d\u5230\u9019\u500b\u96fb\u8a71\u865f\u78bc", "order": "\u9806\u5e8f", "problem_type_problem": "\u969c\u7919", "length_exceptions_by_zone": "\u5730\u5340\u9577\u5ea6\u4f8b\u5916", "job_type": "\u806f\u55ae\u985e\u578b", "pwd": "\u5bc6\u78bc", "serial_length_error": "\u806f\u55ae\u9577\u5ea6\u932f\u8aa4", "reason": "\u539f\u56e0", "no_result_jobs": "\u7d50\u679c\u4e0d\u660e\u806f\u55ae", "last_edit_time": "\u7de8\u8f2f\u6642\u9593", "too_many_records": "\u932f\u8aa4: \u7528\u9019\u4e9b\u689d\u4ef6\u8fd4\u56de\u592a\u591a\u8a18\u9304", "notice": "\u901a\u77e5", "edit_code_list": "\u7de8\u8f2f\u4ee3\u78bc\u76ee\u9304", "create_new_code_list": "\u65b0\u5efa\u4ee3\u78bc\u76ee\u9304", "menu_problems": "\u969c\u7919\u7ba1\u7406", "account": "\u767b\u9304\u5e33\u6236", "search_or_add_customer": "\u67e5\u8a62\u6216\u589e\u52a0\u5ba2\u6236", "phone": "\u96fb\u8a71\u865f\u78bc", "customer": "\u5ba2\u6236", "menu_job_types": "\u806f\u55ae\u985e\u578b", "team": "\u73ed\u5225", "logout": "\u767b\u51fa", "menu_users": "\u7db2\u7ad9\u5e33\u6236", "editor": "\u7de8\u8f2f\u8005", "menu_codes": "\u539f\u56e0\u7ba1\u7406", "edit": "\u7de8\u8f2f", "job_input": "\u806f\u55ae\u9375\u6a94", "logged_in": "\u60a8\u5df2\u7d93\u767b\u9304", "menu_results": "\u7d50\u679c\u7ba1\u7406", "code": "\u4ee3\u78bc", "sort_by": "\u6392\u5e8f", "edited_msg": "\u5df2\u7de8\u8f2f", "cell": "\u884c\u52d5\u96fb\u8a71", "reason_list": "\u539f\u56e0\u76ee\u9304", "nil_result": "", "menu_zones": "\u5730\u5340\u7ba1\u7406", "address": "\u5730\u5740", "create_new_job_type": "\u65b0\u5efa\u806f\u55ae\u985e\u578b", "phone_length": "\u96fb\u8a71\u9577\u5ea6", "name": "\u540d\u5b57", "choose": "=\u9078\u64c7=", "updated_at": "\u66f4\u65b0\u65bc", "search_by_serial": "\u4ee5\u806f\u55ae\u865f\u78bc\u67e5\u8a62", "create_customer": "\u65b0\u5efa\u5ba2\u6236", "zone": "\u5730\u5340", "serial_not_found": "\u627e\u4e0d\u5230\u9019\u500b\u806f\u55ae\u865f\u78bc", "send_data": "\u78ba\u8a8d", "viewer": "\u6d41\u89bd\u8005", "search_not_found": "\u6c92\u6709\u627e\u5230", "admin_menu_section": "\u7db2\u7ad9\u7ba1\u7406", "create_new_employee": "\u65b0\u5efa\u8077\u54e1", "activerecord": {"errors": {"template": {"body": "\u8acb\u66f4\u6b63\u9019\u4e9b\u932f\u8aa4", "header": "\u4e00\u4e9b\u932f\u8aa4\u767c\u751f"}, "models": {"serial": {"attributes": {"serial": {"blank": "\u4e0d\u80fd\u7a7a\u767d"}}}, "zone": {"attributes": {"code": {"taken": "\u5df2\u7d93\u5b58\u5728", "too_short": "\u592a\u77ed"}, "name": {"too_short": "\u592a\u77ed"}}}, "employee": {"attributes": {"taiwanid": {"taken": "\u5df2\u7d93\u5b58\u5728"}, "team": {"taken": "\u5df2\u7d93\u5b58\u5728"}, "name": {"blank": "\u4e0d\u80fd\u7a7a\u767d"}}}, "user": {"attributes": {"login": {"taken": "\u5df2\u7d93\u5b58\u5728", "too_short": "\u592a\u77ed", "blank": "\u4e0d\u80fd\u7a7a\u767d"}, "password": {"too_short": "\u592a\u77ed", "blank": "\u4e0d\u80fd\u7a7a\u767d", "confirmation": "\u4e0d\u76f8\u914d"}, "password_confirmation": {"blank": "\u4e0d\u80fd\u7a7a\u767d"}, "email": {"taken": "\u5df2\u7d93\u5b58\u5728", "too_short": "\u592a\u77ed", "blank": "\u4e0d\u80fd\u7a7a\u767d"}}}, "phone": {"attributes": {"phone": {"blank": "\u4e0d\u80fd\u7a7a\u767d"}}}}}}, "problem_customer": "\u806f\u7d61\u5ba2\u6236", "confirm_pwd": "\u78ba\u8a8d\u5bc6\u78bc", "is_adjourner": "\u4f7f\u7528\u9019\u500b\u7d50\u679c\u7684\u806f\u55ae\u53ef\u4ee5\u5ef6\u9072", "add_exception": "\u65b0\u5efa\u9577\u5ea6\u4f8b\u5916", "problems": "\u969c\u7919\u7ba1\u7406", "taiwanid": "\u8eab\u5206\u8b49\u5b57\u865f", "menu_customers": "\u5ba2\u6236\u7ba1\u7406", "logged_out": "\u60a8\u5df2\u7d93\u767b\u51fa", "edit_job_type": "\u7de8\u8f2f\u806f\u55ae\u985e\u578b", "can_not_be_blank": "\u4e0d\u80fd\u7a7a\u767d", "email": "\u96fb\u5b50\u90f5\u4ef6", "datetime": {"distance_in_words": {"over_x_years": {"other": "\u8d85\u904e {{count}} \u5e74", "one": "\u8d85\u904e 1 \u5e74"}, "about_x_hours": {"other": "\u7d04 {{count}} \u5c0f\u6642", "one": "\u7d04 1 \u5c0f\u6642"}, "x_days": {"other": "{{count}} \u5929", "one": "1 \u5929"}, "x_seconds": {"other": "{{count}} \u79d2", "one": "1 \u79d2"}, "less_than_x_minutes": {"other": "\u5c0f\u65bc {{count}} \u5206\u9418", "one": "\u5c0f\u65bc 1 \u5206\u9418"}, "about_x_months": {"other": "\u7d04 {{count}} \u500b\u6708", "one": "\u7d04 1 \u500b\u6708"}, "x_minutes": {"other": "{{count}} \u5206\u9418", "one": "1 \u5206\u9418"}, "x_months": {"other": "{{count}} \u500b\u6708", "one": "1 \u500b\u6708"}, "less_than_x_seconds": {"other": "\u5c0f\u65bc {{count}} \u79d2", "one": "\u5c0f\u65bc 1 \u79d2"}, "about_x_years": {"other": "\u7d04 {{count}} \u5e74", "one": "\u7d04 1 \u5e74"}, "half_a_minute": "\u534a\u5206\u9418"}}, "person_name": "\u59d3\u540d", "serial_length": "\u806f\u55ae\u9577\u5ea6", "menu_home": "\u56de\u5230\u9996\u9801", "search_customer_explaination": "\u7d50\u679c\u9700\u8981\u5ba2\u6236", "none": "==\u7121==", "result": "\u7d50\u679c", "codes": "\u4ee3\u78bc", "site_title": "PLIM - \u96fb\u8a71\u7dda\u5b89\u88dd\u7ba1\u7406\u7cfb\u7d71", "adjourn": "\u5ef6\u9072", "home_phone": "\u5c45\u5bb6\u96fb\u8a71", "edit_zone": "\u7de8\u8f2f\u5730\u5340", "ampm": "\u4e0a\u4e0b", "menu_action_log": "\u7db2\u7ad9\u8a2a\u554f", "error": "\u932f\u8aa4", "serial": "\u806f\u55ae\u865f\u78bc", "create_new_result": "\u65b0\u5efa\u7d50\u679c", "menu_sms": "\u7c21\u8a0a", "search": "\u67e5\u8a62", "connected_users": "\u7dda\u4e0a\u4f7f\u7528\u8005", "fromdate": "\u5f9e\u65e5\u671f", "edit_result": "\u7de8\u8f2f\u7d50\u679c", "problem_type": "\u969c\u7919\u985e\u5225", "code_list": "\u4ee3\u78bc\u76ee\u9304", "menu_company": "Company", "edit_code": "\u7de8\u8f2f\u4ee3\u78bc", "menu_employees": "\u516c\u53f8\u8077\u54e1", "edit_user": "\u7de8\u8f2f\u5e33\u6236", "date": {"abbr_day_names": ["\u65e5", "\u4e00", "\u4e8c", "\u4e09", "\u56db", "\u4e94", "\u516d"], "order": ["year", "month", "day"], "day_names": ["\u661f\u671f\u65e5", "\u661f\u671f\u4e00", "\u661f\u671f\u4e8c", "\u661f\u671f\u4e09", "\u661f\u671f\u56db", "\u661f\u671f\u4e94", "\u661f\u671f\u516d"], "abbr_month_names": [null, "1\u6708", "2\u6708", "3\u6708", "4\u6708", "5\u6708", "6\u6708", "7\u6708", "8\u6708", "9\u6708", "10\u6708", "11\u6708", "12\u6708"], "formats": {"short": "%b%d\u65e5", "long": "%Y\u5e74%b%d\u65e5", "default": "%Y-%m-%d"}, "month_names": [null, "\u4e00\u6708", "\u4e8c\u6708", "\u4e09\u6708", "\u56db\u6708", "\u4e94\u6708", "\u516d\u6708", "\u4e03\u6708", "\u516b\u6708", "\u4e5d\u6708", "\u5341\u6708", "\u5341\u4e00\u6708", "\u5341\u4e8c\u6708"]}, "problem_type_resolver": "\u4fee\u5fa9", "search_by_phone": "\u4ee5\u96fb\u8a71\u865f\u78bc\u67e5\u8a62", "birthday": "\u51fa\u751f\u5e74\u6708\u65e5", "problem_type_normal": "\u6b63\u5e38", "login_failed": "\u767b\u9304\u5931\u6557", "todate": "\u5230\u65e5\u671f", "job_search": "\u806f\u55ae\u67e5\u8a62", "role": "\u4f5c\u7528", "sms_content": "\u7c21\u8a0a", "today": "\u4eca\u5929", "create_new_zone": "\u65b0\u5efa\u5730\u5340", "help_search": "\u7a7a\u767d\u7b49\u65bc\u6240\u6709", "created_at": "\u5efa\u65bc", "login": "\u767b\u9304", "job_already_exists": "\u8cc7\u6599\u5df2\u7d93\u5b58\u5728", "memo": "\u5099\u8a3b", "phone_length_error": "\u96fb\u8a71\u9577\u5ea6\u932f\u8aa4", "results": "\u7d50\u679c", "edit_employee": "\u7de8\u8f2f\u8077\u54e1", "mdate": "\u65e5\u671f", "menu_send_sms": "\u9001\u7c21\u8a0a", "create_new_code": "\u65b0\u5efa\u4ee3\u78bc", "welcome": "\u6b61\u8fce", "create_time": "\u65b0\u5efa\u6642\u9593", "delete": "\u522a\u9664", "exceptions": "\u4f8b\u5916"}, "en": {"time": {"am": "am", "formats": {"time": "%H:%M", "short": "%d %b %H:%M", "long": "%B %d, %Y %H:%M", "default": "%a, %d %b %Y %H:%M:%S %z"}, "pm": "pm"}, "result_input": "Result input", "admin": "Admin", "site_menu_section": "Site", "jobs": "Jobs", "language": "Language", "create_new_user": "Create a new user", "all": "All", "no_record_found": "No record found", "created_msg": "Created!", "confirm_action": "Are you sure ?", "phone_not_found": "Phone not found", "order": "Order", "problem_type_problem": "Problem", "length_exceptions_by_zone": "Exceptions by zone", "job_type": "Job type", "pwd": "Password", "serial_length_error": "Serial length error", "reason": "Reason", "no_result_jobs": "Job without results", "last_edit_time": "Edit time", "too_many_records": "Error! Too many records for this search", "notice": "Notice", "edit_code_list": "Editing code list", "create_new_code_list": "Create a new code list", "menu_problems": "Problems", "account": "Account", "search_or_add_customer": "Search or add customer", "phone": "Phone", "customer": "Customer", "menu_job_types": "Job types", "team": "Team", "logout": "Logout", "menu_users": "Site accounts", "editor": "Editor", "menu_codes": "Codes", "edit": "Edit", "job_input": "New job", "logged_in": "You are logged in.", "menu_results": "Results", "code": "Code", "sort_by": "Sort by", "edited_msg": "Edited!", "cell": "Cell number", "reason_list": "Reason list", "nil_result": "", "menu_zones": "Regions", "address": "Address", "create_new_job_type": "Create Job type", "phone_length": "Phone length", "name": "Name", "choose": "= Choose =", "updated_at": "updated at", "search_by_serial": "Search by serial", "create_customer": "Enter new customer data", "zone": "Region", "serial_not_found": "Serial not found", "send_data": "Send", "viewer": "Viewer", "search_not_found": "Not found", "admin_menu_section": "Administration", "create_new_employee": "Create employee", "activerecord": {"errors": {"template": {"body": "Please correct these errors.", "header": "Some errors occured"}, "messages": {"empty": "can't be empty", "accepted": "must be accepted", "less_than": "must be less than {{count}}", "invalid": "is invalid", "wrong_length": "is the wrong length (should be {{count}} characters)", "exclusion": "is reserved", "not_a_number": "is not a number", "taken": "has already been taken", "less_than_or_equal_to": "must be less than or equal to {{count}}", "too_short": "is too short (minimum is {{count}} characters)", "blank": "can't be blank", "odd": "must be odd", "too_long": "is too long (maximum is {{count}} characters)", "greater_than": "must be greater than {{count}}", "confirmation": "doesn't match confirmation", "even": "must be even", "greater_than_or_equal_to": "must be greater than or equal to {{count}}", "inclusion": "is not included in the list", "equal_to": "must be equal to {{count}}"}, "models": {"serial": {"attributes": {"serial": {"blank": "can not be blank"}}}, "zone": {"attributes": {"code": {"taken": "already exists", "too_short": "is too short"}, "name": {"too_short": "is too short"}}}, "employee": {"attributes": {"taiwanid": {"taken": "is already taken"}, "team": {"taken": "already exists"}, "name": {"blank": "can not be blank"}}}, "user": {"attributes": {"login": {"taken": "is already taken", "too_short": "is too short", "blank": "can not be blank"}, "password": {"too_short": "is too short", "blank": "can not be blank", "confirmation": "does not match the confirmation"}, "password_confirmation": {"blank": "can not be blank"}, "email": {"taken": "is already taken", "too_short": "is too short", "blank": "can not be blank"}}}, "phone": {"attributes": {"phone": {"blank": "can not be blank"}}}}}}, "problem_customer": "Contact", "number": {"percentage": {"format": {"delimiter": ""}}, "currency": {"format": {"delimiter": ",", "unit": "$", "format": "%u%n", "precision": 2, "separator": "."}}, "human": {"storage_units": {"format": "%n %u", "units": {"kb": "KB", "mb": "MB", "gb": "GB", "byte": {"other": "Bytes", "one": "Byte"}, "tb": "TB"}}, "format": {"delimiter": "", "precision": 1}}, "format": {"delimiter": ",", "precision": 3, "separator": "."}, "precision": {"format": {"delimiter": ""}}}, "confirm_pwd": "Confirm password", "is_adjourner": "this result is an adjourner", "add_exception": "Add an exception", "problems": "Problems", "taiwanid": "ID number", "menu_customers": "Customers", "logged_out": "You have been logged out.", "edit_job_type": "Edit Job type", "can_not_be_blank": "can not be blank", "email": "Email", "datetime": {"prompts": {"month": "Month", "second": "Seconds", "year": "Year", "hour": "Hour", "day": "Day", "minute": "Minute"}, "distance_in_words": {"over_x_years": {"other": "over {{count}} years", "one": "over 1 year"}, "about_x_hours": {"other": "about {{count}} hours", "one": "about 1 hour"}, "x_days": {"other": "{{count}} days", "one": "1 day"}, "less_than_x_minutes": {"other": "less than {{count}} minutes", "one": "less than a minute"}, "x_seconds": {"other": "{{count}} seconds", "one": "1 second"}, "about_x_months": {"other": "about {{count}} months", "one": "about 1 month"}, "x_minutes": {"other": "{{count}} minutes", "one": "1 minute"}, "x_months": {"other": "{{count}} months", "one": "1 month"}, "less_than_x_seconds": {"other": "less than {{count}} seconds", "one": "less than 1 second"}, "about_x_years": {"other": "about {{count}} years", "one": "about 1 year"}, "half_a_minute": "half a minute"}}, "person_name": "Name", "serial_length": "Serial length", "menu_home": "Home", "search_customer_explaination": "The result needs a related customer", "none": "==None==", "result": "Result", "codes": "Codes", "site_title": "PLIM - Phone Line Installation Manager", "adjourn": "adjourn", "home_phone": "Home phone", "support": {"array": {"two_words_connector": " and ", "last_word_connector": ", and ", "words_connector": ", "}}, "edit_zone": "Edit region", "ampm": "AMPM", "menu_action_log": "Activity log", "error": "Error", "serial": "Serial", "create_new_result": "Create result", "menu_sms": "SMS", "search": "Search", "connected_users": "Connected users", "fromdate": "From date", "edit_result": "Edit results", "problem_type": "Problem type", "code_list": "Code list", "menu_company": "Company", "edit_code": "Editing code", "menu_employees": "Employees", "edit_user": "Edit account", "date": {"order": ["year", "month", "day"], "abbr_day_names": ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], "day_names": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], "abbr_month_names": [null, "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], "formats": {"short": "%b %d", "long": "%B %d, %Y", "default": "%Y-%m-%d"}, "month_names": [null, "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]}, "problem_type_resolver": "Resolver", "search_by_phone": "Search by phone", "birthday": "Birthday", "problem_type_normal": "Normal", "login_failed": "Login failed", "todate": "To date", "job_search": "Search", "role": "Role", "sms_content": "Message", "help_search": "blank fieds values means all (do not filter)", "create_new_zone": "Create region", "today": "today", "created_at": "created at", "login": "Login", "job_already_exists": "This job already exists", "memo": "Memo", "phone_length_error": "Phone length error", "results": "Results", "edit_employee": "Edit employee", "mdate": "Date", "menu_send_sms": "Send SMS", "create_new_code": "Create a new code", "welcome": "Welcome", "create_time": "Creation time", "delete": "Delete", "exceptions": "Exceptions"}};

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
