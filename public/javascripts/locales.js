if (!window.I18n) { I18n = {}; }

I18n.defaultLocale = "zh";

I18n.translations = {"en": {"create_new_user": "Create a new user", "create_time": "Creation time", "menu_home": "Home", "admin": "Admin", "language": "Language", "connected_users": "Connected users", "problem_type_problem": "Problem", "choose": "= Choose =", "home_phone": "Home phone", "edit_user": "Edit account", "created_msg": "Created!", "menu_action_log": "Activity log", "pwd": "Password", "reason": "Reason", "last_edit_time": "Edit time", "search_not_found": "Not found", "code_list": "Code list", "edit_job_type": "Edit Job type", "search_customer_explaination": "The result needs a related customer", "serial_length_error": "Serial length error", "role": "Role", "admin_menu_section": "Administration", "confirm_action": "Are you sure ?", "customer": "Customer", "menu_problems": "Problems", "error": "Error", "job_already_exists": "This job already exists", "taiwanid": "ID number", "job_input": "New job", "menu_customers": "Customers", "is_adjourner": "this result is an adjourner", "serial": "Serial", "address": "Address", "edit_zone": "Edit region", "code": "Code", "editor": "Editor", "edit_code_list": "Editing code list", "edit": "Edit", "edited_msg": "Edited!", "codes": "Codes", "sort_by": "Sort by", "results": "Results", "menu_results": "Results", "mdate": "Date", "phone_length": "Phone length", "cell": "Cell number", "no_record_found": "No record found", "number": {"percentage": {"format": {"delimiter": ""}}, "currency": {"format": {"delimiter": ",", "format": "%u%n", "unit": "$", "precision": 2, "separator": "."}}, "human": {"format": {"delimiter": "", "precision": 1}, "storage_units": {"units": {"byte": {"other": "Bytes", "one": "Byte"}, "kb": "KB", "mb": "MB", "gb": "GB", "tb": "TB"}, "format": "%n %u"}}, "format": {"delimiter": ",", "precision": 3, "separator": "."}, "precision": {"format": {"delimiter": ""}}}, "nil_result": "", "name": "Name", "all": "All", "send_data": "Send", "create_new_employee": "Create employee", "length_exceptions_by_zone": "Exceptions by zone", "zone": "Region", "welcome": "Welcome", "result": "Result", "job_type": "Job type", "viewer": "Viewer", "too_many_records": "Error! Too many records for this search", "search_by_serial": "Search by serial", "add_exception": "Add an exception", "create_customer": "Enter new customer data", "time": {"pm": "pm", "am": "am", "formats": {"long": "%B %d, %Y %H:%M", "short": "%d %b %H:%M", "time": "%H:%M", "default": "%a, %d %b %Y %H:%M:%S %z"}}, "create_new_code_list": "Create a new code list", "confirm_pwd": "Confirm password", "menu_zones": "Regions", "search_or_add_customer": "Search or add customer", "birthday": "Birthday", "help_search": "blank fieds values means all (do not filter)", "menu_employees": "Employees", "email": "Email", "person_name": "Name", "logout": "Logout", "site_title": "PLIM - Phone Line Installation Manager", "serial_length": "Serial length", "todate": "To date", "none": "==None==", "login": "Login", "create_new_code": "Create a new code", "create_new_result": "Create result", "adjourn": "adjourn", "team": "Team", "create_new_job_type": "Create Job type", "ampm": "AMPM", "account": "Account", "site_menu_section": "Site", "menu_codes": "Codes", "problem_type": "Problem type", "today": "today", "serial_not_found": "Serial not found", "fromdate": "From date", "date": {"abbr_month_names": [null, "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], "order": ["year", "month", "day"], "month_names": [null, "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], "abbr_day_names": ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], "day_names": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], "formats": {"long": "%B %d, %Y", "short": "%b %d", "default": "%Y-%m-%d"}}, "problem_type_resolver": "Resolver", "search_by_phone": "Search by phone", "reason_list": "Reason list", "edit_code": "Editing code", "problem_type_normal": "Normal", "job_search": "Search", "problems": "Problems", "phone_not_found": "Phone not found", "order": "Order", "create_new_zone": "Create region", "jobs": "Jobs", "login_failed": "Login failed", "edit_result": "Edit results", "notice": "Notice", "datetime": {"distance_in_words": {"about_x_months": {"other": "about {{count}} months", "one": "about 1 month"}, "x_minutes": {"other": "{{count}} minutes", "one": "1 minute"}, "x_months": {"other": "{{count}} months", "one": "1 month"}, "less_than_x_seconds": {"other": "less than {{count}} seconds", "one": "less than 1 second"}, "about_x_years": {"other": "about {{count}} years", "one": "about 1 year"}, "half_a_minute": "half a minute", "over_x_years": {"other": "over {{count}} years", "one": "over 1 year"}, "about_x_hours": {"other": "about {{count}} hours", "one": "about 1 hour"}, "x_days": {"other": "{{count}} days", "one": "1 day"}, "x_seconds": {"other": "{{count}} seconds", "one": "1 second"}, "less_than_x_minutes": {"other": "less than {{count}} minutes", "one": "less than a minute"}}, "prompts": {"month": "Month", "second": "Seconds", "year": "Year", "minute": "Minute", "hour": "Hour", "day": "Day"}}, "can_not_be_blank": "can not be blank", "search": "Search", "edit_employee": "Edit employee", "menu_job_types": "Job types", "no_result_jobs": "Job without results", "support": {"array": {"two_words_connector": " and ", "last_word_connector": ", and ", "words_connector": ", "}}, "phone": "Phone", "memo": "Memo", "logged_in": "You are logged in.", "activerecord": {"errors": {"template": {"header": "Some errors occured", "body": "Please correct these errors."}, "models": {"serial": {"attributes": {"serial": {"blank": "can not be blank"}}}, "zone": {"attributes": {"code": {"taken": "already exists", "too_short": "is too short"}, "name": {"too_short": "is too short"}}}, "employee": {"attributes": {"taiwanid": {"taken": "is already taken"}, "team": {"taken": "already exists"}, "name": {"blank": "can not be blank"}}}, "phone": {"attributes": {"phone": {"blank": "can not be blank"}}}, "user": {"attributes": {"email": {"taken": "is already taken", "blank": "can not be blank", "too_short": "is too short"}, "password_confirmation": {"blank": "can not be blank"}, "login": {"taken": "is already taken", "blank": "can not be blank", "too_short": "is too short"}, "password": {"blank": "can not be blank", "too_short": "is too short", "confirmation": "does not match the confirmation"}}}}, "messages": {"empty": "can't be empty", "accepted": "must be accepted", "less_than": "must be less than {{count}}", "invalid": "is invalid", "wrong_length": "is the wrong length (should be {{count}} characters)", "exclusion": "is reserved", "not_a_number": "is not a number", "taken": "has already been taken", "less_than_or_equal_to": "must be less than or equal to {{count}}", "too_short": "is too short (minimum is {{count}} characters)", "blank": "can't be blank", "odd": "must be odd", "too_long": "is too long (maximum is {{count}} characters)", "greater_than": "must be greater than {{count}}", "confirmation": "doesn't match confirmation", "even": "must be even", "greater_than_or_equal_to": "must be greater than or equal to {{count}}", "inclusion": "is not included in the list", "equal_to": "must be equal to {{count}}"}}}, "phone_length_error": "Phone length error", "exceptions": "Exceptions", "logged_out": "You have been logged out.", "delete": "Delete", "menu_users": "Site accounts", "result_input": "Result input"}, "zh": {"create_new_user": "\u65b0\u5efa\u7db2\u7ad9\u5e33\u6236", "create_time": "\u65b0\u5efa\u6642\u9593", "menu_home": "\u56de\u5230\u9996\u9801", "admin": "\u7ba1\u7406\u8005", "language": "\u8a9e\u8a00", "connected_users": "\u7dda\u4e0a\u4f7f\u7528\u8005", "problem_type_problem": "\u969c\u7919", "choose": "=\u9078\u64c7=", "home_phone": "\u5c45\u5bb6\u96fb\u8a71", "edit_user": "\u7de8\u8f2f\u5e33\u6236", "created_msg": "\u5df2\u5efa\u7acb", "menu_action_log": "\u7db2\u7ad9\u8a2a\u554f", "pwd": "\u5bc6\u78bc", "reason": "\u539f\u56e0", "last_edit_time": "\u7de8\u8f2f\u6642\u9593", "search_not_found": "\u6c92\u6709\u627e\u5230", "code_list": "\u4ee3\u78bc\u76ee\u9304", "edit_job_type": "\u7de8\u8f2f\u806f\u55ae\u985e\u578b", "search_customer_explaination": "The result needs a related customer", "serial_length_error": "\u806f\u55ae\u9577\u5ea6\u932f\u8aa4", "role": "\u4f5c\u7528", "admin_menu_section": "\u7db2\u7ad9\u7ba1\u7406", "confirm_action": "\u60a8\u78ba\u5b9a?", "customer": "\u5ba2\u6236", "menu_problems": "\u969c\u7919\u7ba1\u7406", "error": "\u932f\u8aa4", "job_already_exists": "\u8cc7\u6599\u5df2\u7d93\u5b58\u5728", "taiwanid": "\u8eab\u5206\u8b49\u5b57\u865f", "job_input": "\u806f\u55ae\u9375\u6a94", "menu_customers": "\u5ba2\u6236\u7ba1\u7406", "is_adjourner": "\u4f7f\u7528\u9019\u500b\u7d50\u679c\u7684\u806f\u55ae\u53ef\u4ee5\u5ef6\u9072", "serial": "\u806f\u55ae\u865f\u78bc", "address": "\u5730\u5740", "edit_zone": "\u7de8\u8f2f\u5730\u5340", "code": "\u4ee3\u78bc", "editor": "\u7de8\u8f2f\u8005", "edit_code_list": "\u7de8\u8f2f\u4ee3\u78bc\u76ee\u9304", "edit": "\u7de8\u8f2f", "edited_msg": "\u5df2\u7de8\u8f2f", "codes": "\u4ee3\u78bc", "sort_by": "\u6392\u5e8f", "results": "\u7d50\u679c", "menu_results": "\u7d50\u679c\u7ba1\u7406", "mdate": "\u65e5\u671f", "phone_length": "\u96fb\u8a71\u9577\u5ea6", "cell": "\u884c\u52d5\u96fb\u8a71", "no_record_found": "\u4f7f\u7528\u9019\u4e9b\u689d\u4ef6\u627e\u4e0d\u5230\u806f\u55ae\u8a18\u9304", "nil_result": "", "name": "\u540d\u5b57", "all": "\u6240\u6709", "send_data": "\u78ba\u8a8d", "create_new_employee": "\u65b0\u5efa\u8077\u54e1", "length_exceptions_by_zone": "\u5730\u5340\u9577\u5ea6\u4f8b\u5916", "zone": "\u5730\u5340", "welcome": "\u6b61\u8fce", "result": "\u7d50\u679c", "job_type": "\u806f\u55ae\u985e\u578b", "viewer": "\u6d41\u89bd\u8005", "too_many_records": "\u932f\u8aa4: \u7528\u9019\u4e9b\u689d\u4ef6\u8fd4\u56de\u592a\u591a\u8a18\u9304", "search_by_serial": "\u4ee5\u806f\u55ae\u865f\u78bc\u67e5\u8a62", "create_customer": "\u65b0\u5efa\u5ba2\u6236", "add_exception": "\u65b0\u5efa\u9577\u5ea6\u4f8b\u5916", "time": {"pm": "PM", "am": "AM", "formats": {"long": "%Y\u5e74%b%d\u65e5 %H:%M", "short": "%b%d\u65e5 %H:%M", "time": "%H:%M", "default": "%Y\u5e74%b%d\u65e5 %A %H:%M:%S %Z"}}, "create_new_code_list": "\u65b0\u5efa\u4ee3\u78bc\u76ee\u9304", "confirm_pwd": "\u78ba\u8a8d\u5bc6\u78bc", "menu_zones": "\u5730\u5340\u7ba1\u7406", "search_or_add_customer": "\u67e5\u8a62\u6216\u589e\u52a0\u5ba2\u6236", "birthday": "\u51fa\u751f\u5e74\u6708\u65e5", "help_search": "\u7a7a\u767d\u7b49\u65bc\u6240\u6709", "menu_employees": "\u516c\u53f8\u8077\u54e1", "email": "\u96fb\u5b50\u90f5\u4ef6", "person_name": "\u59d3\u540d", "logout": "\u767b\u51fa", "site_title": "PLIM - \u96fb\u8a71\u7dda\u5b89\u88dd\u7ba1\u7406\u7cfb\u7d71", "serial_length": "\u806f\u55ae\u9577\u5ea6", "todate": "\u5230\u65e5\u671f", "none": "==\u7121==", "login": "\u767b\u9304", "create_new_code": "\u65b0\u5efa\u4ee3\u78bc", "create_new_result": "\u65b0\u5efa\u7d50\u679c", "adjourn": "\u5ef6\u9072", "team": "\u73ed\u5225", "create_new_job_type": "\u65b0\u5efa\u806f\u55ae\u985e\u578b", "ampm": "\u4e0a\u4e0b", "account": "\u767b\u9304\u5e33\u6236", "site_menu_section": "\u7db2\u7ad9", "menu_codes": "\u539f\u56e0\u7ba1\u7406", "problem_type": "\u969c\u7919\u985e\u5225", "today": "\u4eca\u5929", "serial_not_found": "\u627e\u4e0d\u5230\u9019\u500b\u806f\u55ae\u865f\u78bc", "fromdate": "\u5f9e\u65e5\u671f", "date": {"abbr_month_names": [null, "1\u6708", "2\u6708", "3\u6708", "4\u6708", "5\u6708", "6\u6708", "7\u6708", "8\u6708", "9\u6708", "10\u6708", "11\u6708", "12\u6708"], "month_names": [null, "\u4e00\u6708", "\u4e8c\u6708", "\u4e09\u6708", "\u56db\u6708", "\u4e94\u6708", "\u516d\u6708", "\u4e03\u6708", "\u516b\u6708", "\u4e5d\u6708", "\u5341\u6708", "\u5341\u4e00\u6708", "\u5341\u4e8c\u6708"], "order": ["year", "month", "day"], "abbr_day_names": ["\u65e5", "\u4e00", "\u4e8c", "\u4e09", "\u56db", "\u4e94", "\u516d"], "day_names": ["\u661f\u671f\u65e5", "\u661f\u671f\u4e00", "\u661f\u671f\u4e8c", "\u661f\u671f\u4e09", "\u661f\u671f\u56db", "\u661f\u671f\u4e94", "\u661f\u671f\u516d"], "formats": {"long": "%Y\u5e74%b%d\u65e5", "short": "%b%d\u65e5", "default": "%Y-%m-%d"}}, "problem_type_resolver": "\u4fee\u5fa9", "search_by_phone": "\u4ee5\u96fb\u8a71\u865f\u78bc\u67e5\u8a62", "reason_list": "\u539f\u56e0\u76ee\u9304", "edit_code": "\u7de8\u8f2f\u4ee3\u78bc", "problem_type_normal": "\u6b63\u5e38", "job_search": "\u806f\u55ae\u67e5\u8a62", "problems": "\u969c\u7919\u7ba1\u7406", "phone_not_found": "\u627e\u4e0d\u5230\u9019\u500b\u96fb\u8a71\u865f\u78bc", "order": "\u9806\u5e8f", "create_new_zone": "\u65b0\u5efa\u5730\u5340", "jobs": "\u806f\u55ae", "login_failed": "\u767b\u9304\u5931\u6557", "edit_result": "\u7de8\u8f2f\u7d50\u679c", "notice": "\u901a\u77e5", "datetime": {"distance_in_words": {"about_x_months": {"other": "\u7d04 {{count}} \u500b\u6708", "one": "\u7d04 1 \u500b\u6708"}, "x_minutes": {"other": "{{count}} \u5206\u9418", "one": "1 \u5206\u9418"}, "x_months": {"other": "{{count}} \u500b\u6708", "one": "1 \u500b\u6708"}, "less_than_x_seconds": {"other": "\u5c0f\u65bc {{count}} \u79d2", "one": "\u5c0f\u65bc 1 \u79d2"}, "about_x_years": {"other": "\u7d04 {{count}} \u5e74", "one": "\u7d04 1 \u5e74"}, "half_a_minute": "\u534a\u5206\u9418", "over_x_years": {"other": "\u8d85\u904e {{count}} \u5e74", "one": "\u8d85\u904e 1 \u5e74"}, "about_x_hours": {"other": "\u7d04 {{count}} \u5c0f\u6642", "one": "\u7d04 1 \u5c0f\u6642"}, "x_days": {"other": "{{count}} \u5929", "one": "1 \u5929"}, "less_than_x_minutes": {"other": "\u5c0f\u65bc {{count}} \u5206\u9418", "one": "\u5c0f\u65bc 1 \u5206\u9418"}, "x_seconds": {"other": "{{count}} \u79d2", "one": "1 \u79d2"}}}, "can_not_be_blank": "\u4e0d\u80fd\u7a7a\u767d", "edit_employee": "\u7de8\u8f2f\u8077\u54e1", "menu_job_types": "\u806f\u55ae\u985e\u578b", "no_result_jobs": "\u7d50\u679c\u4e0d\u660e\u806f\u55ae", "search": "\u67e5\u8a62", "phone": "\u96fb\u8a71\u865f\u78bc", "memo": "\u5099\u8a3b", "activerecord": {"errors": {"models": {"serial": {"attributes": {"serial": {"blank": "\u4e0d\u80fd\u7a7a\u767d"}}}, "zone": {"attributes": {"code": {"taken": "\u5df2\u7d93\u5b58\u5728", "too_short": "\u592a\u77ed"}, "name": {"too_short": "\u592a\u77ed"}}}, "employee": {"attributes": {"taiwanid": {"taken": "\u5df2\u7d93\u5b58\u5728"}, "team": {"taken": "\u5df2\u7d93\u5b58\u5728"}, "name": {"blank": "\u4e0d\u80fd\u7a7a\u767d"}}}, "phone": {"attributes": {"phone": {"blank": "\u4e0d\u80fd\u7a7a\u767d"}}}, "user": {"attributes": {"email": {"taken": "\u5df2\u7d93\u5b58\u5728", "blank": "\u4e0d\u80fd\u7a7a\u767d", "too_short": "\u592a\u77ed"}, "password_confirmation": {"blank": "\u4e0d\u80fd\u7a7a\u767d"}, "login": {"taken": "\u5df2\u7d93\u5b58\u5728", "blank": "\u4e0d\u80fd\u7a7a\u767d", "too_short": "\u592a\u77ed"}, "password": {"blank": "\u4e0d\u80fd\u7a7a\u767d", "too_short": "\u592a\u77ed", "confirmation": "\u4e0d\u76f8\u914d"}}}}, "template": {"header": "\u4e00\u4e9b\u932f\u8aa4\u767c\u751f", "body": "\u8acb\u66f4\u6b63\u9019\u4e9b\u932f\u8aa4"}}}, "logged_in": "\u60a8\u5df2\u7d93\u767b\u9304", "phone_length_error": "\u96fb\u8a71\u9577\u5ea6\u932f\u8aa4", "exceptions": "\u4f8b\u5916", "logged_out": "\u60a8\u5df2\u7d93\u767b\u51fa", "delete": "\u522a\u9664", "menu_users": "\u7db2\u7ad9\u5e33\u6236", "result_input": "\u7d50\u679c\u9375\u6a94"}};

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
