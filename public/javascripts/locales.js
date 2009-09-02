if (!window.I18n) { I18n = {}; }

I18n.defaultLocale = "zh";

I18n.translations = {"en": {"support": {"array": {"last_word_connector": ", and ", "words_connector": ", ", "two_words_connector": " and "}}, "datetime": {"prompts": {"second": "Seconds", "month": "Month", "minute": "Minute", "year": "Year", "hour": "Hour", "day": "Day"}, "distance_in_words": {"less_than_x_seconds": {"other": "less than {{count}} seconds", "one": "less than 1 second"}, "about_x_years": {"other": "about {{count}} years", "one": "about 1 year"}, "half_a_minute": "half a minute", "over_x_years": {"other": "over {{count}} years", "one": "over 1 year"}, "about_x_hours": {"other": "about {{count}} hours", "one": "about 1 hour"}, "x_days": {"other": "{{count}} days", "one": "1 day"}, "x_seconds": {"other": "{{count}} seconds", "one": "1 second"}, "less_than_x_minutes": {"other": "less than {{count}} minutes", "one": "less than a minute"}, "about_x_months": {"other": "about {{count}} months", "one": "about 1 month"}, "x_minutes": {"other": "{{count}} minutes", "one": "1 minute"}, "x_months": {"other": "{{count}} months", "one": "1 month"}}}, "number": {"human": {"storage_units": {"units": {"kb": "KB", "byte": {"other": "Bytes", "one": "Byte"}, "mb": "MB", "gb": "GB", "tb": "TB"}, "format": "%n %u"}, "format": {"precision": 1, "delimiter": ""}}, "precision": {"format": {"delimiter": ""}}, "format": {"precision": 3, "separator": ".", "delimiter": ","}, "percentage": {"format": {"delimiter": ""}}, "currency": {"format": {"unit": "$", "precision": 2, "format": "%u%n", "separator": ".", "delimiter": ","}}}, "results": "Results", "create_time": "Creation time", "last_edit_time": "Edit time", "send_data": "Send", "phone_length_error": "Phone length error", "create_new_zone": "Create region", "none": "==None==", "reason_list": "Reason list", "no_result_jobs": "Job without results", "search": "Search", "role": "Role", "exceptions": "Exceptions", "create_new_user": "Create a new user", "nil_result": "", "no_record_found": "No record found", "create_new_job_type": "Create Job type", "menu_results": "Results", "can_not_be_blank": "can not be blank", "login": "Login", "serial": "Serial", "choose": "= Choose =", "edit_job_type": "Edit Job type", "edit_code_list": "Editing code list", "edit_user": "Edit account", "all": "All", "codes": "Codes", "birthday": "Birthday", "edit_code": "Editing code", "email": "Email", "person_name": "Name", "length_exceptions_by_zone": "Exceptions by zone", "site_title": "PLIM - Phone Line Installation Manager", "serial_length": "Serial length", "help_search": "blank fieds values means all (do not filter)", "result_input": "Result input", "site_menu_section": "Site", "job_input": "New job", "ampm": "AMPM", "confirm_pwd": "Confirm password", "home_phone": "Home phone", "jobs": "Jobs", "create_new_employee": "Create employee", "search_by_serial": "Search by serial", "code_list": "Code list", "menu_home": "Home", "activerecord": {"errors": {"template": {"body": "Please correct these errors.", "header": "Some errors occured"}, "models": {"zone": {"attributes": {"code": {"too_short": "is too short", "taken": "already exists"}, "name": {"too_short": "is too short"}}}, "serial": {"attributes": {"serial": {"blank": "can not be blank"}}}, "employee": {"attributes": {"team": {"taken": "already exists"}, "taiwanid": {"taken": "is already taken"}, "name": {"blank": "can not be blank"}}}, "user": {"attributes": {"password": {"blank": "can not be blank", "too_short": "is too short", "confirmation": "does not match the confirmation"}, "login": {"blank": "can not be blank", "too_short": "is too short", "taken": "is already taken"}, "password_confirmation": {"blank": "can not be blank"}, "email": {"blank": "can not be blank", "too_short": "is too short", "taken": "is already taken"}}}, "phone": {"attributes": {"phone": {"blank": "can not be blank"}}}}, "messages": {"too_short": "is too short (minimum is {{count}} characters)", "blank": "can't be blank", "odd": "must be odd", "too_long": "is too long (maximum is {{count}} characters)", "greater_than": "must be greater than {{count}}", "confirmation": "doesn't match confirmation", "even": "must be even", "greater_than_or_equal_to": "must be greater than or equal to {{count}}", "inclusion": "is not included in the list", "equal_to": "must be equal to {{count}}", "empty": "can't be empty", "accepted": "must be accepted", "less_than": "must be less than {{count}}", "invalid": "is invalid", "wrong_length": "is the wrong length (should be {{count}} characters)", "exclusion": "is reserved", "not_a_number": "is not a number", "taken": "has already been taken", "less_than_or_equal_to": "must be less than or equal to {{count}}"}}}, "viewer": "Viewer", "edited_msg": "Edited!", "editor": "Editor", "mdate": "Date", "zone": "Region", "phone_length": "Phone length", "sort_by": "Sort by", "create_new_result": "Create result", "edit_employee": "Edit employee", "fromdate": "From date", "result": "Result", "login_failed": "Login failed", "todate": "To date", "code": "Code", "is_adjourner": "this result is an adjourner", "account": "Account", "memo": "Memo", "serial_not_found": "Serial not found", "create_new_code_list": "Create a new code list", "today": "today", "created_msg": "Created!", "adjourn": "adjourn", "search_by_phone": "Search by phone", "job_already_exists": "This job already exists", "error": "Error", "notice": "Notice", "language": "Language", "welcome": "Welcome", "confirm_action": "Are you sure ?", "name": "Name", "reason": "Reason", "menu_zones": "Regions", "team": "Team", "logout": "Logout", "too_many_records": "Error! Too many records for this search", "menu_job_types": "Job types", "logged_in": "You are logged in.", "date": {"month_names": [null, "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], "abbr_day_names": ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], "day_names": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], "order": ["year", "month", "day"], "abbr_month_names": [null, "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], "formats": {"short": "%b %d", "long": "%B %d, %Y", "default": "%Y-%m-%d"}}, "menu_action_log": "Activity log", "job_type": "Job type", "job_search": "Search", "order": "Order", "cell": "Cell number", "menu_codes": "Codes", "create_new_code": "Create a new code", "edit_result": "Edit results", "logged_out": "You have been logged out.", "pwd": "Password", "admin": "Admin", "address": "Address", "taiwanid": "ID number", "phone_not_found": "Phone not found", "edit": "Edit", "phone": "Phone", "admin_menu_section": "Administration", "time": {"am": "am", "formats": {"short": "%d %b %H:%M", "long": "%B %d, %Y %H:%M", "time": "%H:%M", "default": "%a, %d %b %Y %H:%M:%S %z"}, "pm": "pm"}, "add_exception": "Add an exception", "edit_zone": "Edit region", "serial_length_error": "Serial length error", "menu_users": "Site accounts", "menu_employees": "Employees"}, "zh": {"datetime": {"distance_in_words": {"less_than_x_seconds": {"other": "\u5c0f\u65bc {{count}} \u79d2", "one": "\u5c0f\u65bc 1 \u79d2"}, "about_x_years": {"other": "\u7d04 {{count}} \u5e74", "one": "\u7d04 1 \u5e74"}, "half_a_minute": "\u534a\u5206\u9418", "over_x_years": {"other": "\u8d85\u904e {{count}} \u5e74", "one": "\u8d85\u904e 1 \u5e74"}, "about_x_hours": {"other": "\u7d04 {{count}} \u5c0f\u6642", "one": "\u7d04 1 \u5c0f\u6642"}, "x_days": {"other": "{{count}} \u5929", "one": "1 \u5929"}, "less_than_x_minutes": {"other": "\u5c0f\u65bc {{count}} \u5206\u9418", "one": "\u5c0f\u65bc 1 \u5206\u9418"}, "x_seconds": {"other": "{{count}} \u79d2", "one": "1 \u79d2"}, "about_x_months": {"other": "\u7d04 {{count}} \u500b\u6708", "one": "\u7d04 1 \u500b\u6708"}, "x_minutes": {"other": "{{count}} \u5206\u9418", "one": "1 \u5206\u9418"}, "x_months": {"other": "{{count}} \u500b\u6708", "one": "1 \u500b\u6708"}}}, "results": "\u7d50\u679c", "create_time": "\u65b0\u5efa\u6642\u9593", "last_edit_time": "\u7de8\u8f2f\u6642\u9593", "send_data": "\u78ba\u8a8d", "phone_length_error": "\u96fb\u8a71\u9577\u5ea6\u932f\u8aa4", "create_new_zone": "\u65b0\u5efa\u5730\u5340", "none": "==\u7121==", "reason_list": "\u539f\u56e0\u76ee\u9304", "no_result_jobs": "\u7d50\u679c\u4e0d\u660e\u806f\u55ae", "search": "\u67e5\u8a62", "role": "\u4f5c\u7528", "exceptions": "\u4f8b\u5916", "create_new_user": "\u65b0\u5efa\u7db2\u7ad9\u5e33\u6236", "nil_result": "", "no_record_found": "\u4f7f\u7528\u9019\u4e9b\u689d\u4ef6\u627e\u4e0d\u5230\u806f\u55ae\u8a18\u9304", "create_new_job_type": "\u65b0\u5efa\u806f\u55ae\u985e\u578b", "menu_results": "\u7d50\u679c\u7ba1\u7406", "can_not_be_blank": "\u4e0d\u80fd\u7a7a\u767d", "login": "\u767b\u9304", "serial": "\u806f\u55ae\u865f\u78bc", "choose": "=\u9078\u64c7=", "edit_job_type": "\u7de8\u8f2f\u806f\u55ae\u985e\u578b", "edit_code_list": "\u7de8\u8f2f\u4ee3\u78bc\u76ee\u9304", "edit_user": "\u7de8\u8f2f\u5e33\u6236", "all": "\u6240\u6709", "codes": "\u4ee3\u78bc", "birthday": "\u51fa\u751f\u5e74\u6708\u65e5", "edit_code": "\u7de8\u8f2f\u4ee3\u78bc", "email": "\u96fb\u5b50\u90f5\u4ef6", "person_name": "\u59d3\u540d", "length_exceptions_by_zone": "\u5730\u5340\u9577\u5ea6\u4f8b\u5916", "site_title": "PLIM - \u96fb\u8a71\u7dda\u5b89\u88dd\u7ba1\u7406\u7cfb\u7d71", "serial_length": "\u806f\u55ae\u9577\u5ea6", "help_search": "\u7a7a\u767d\u7b49\u65bc\u6240\u6709", "result_input": "\u7d50\u679c\u9375\u6a94", "site_menu_section": "\u7db2\u7ad9", "job_input": "\u806f\u55ae\u9375\u6a94", "ampm": "\u4e0a\u4e0b", "confirm_pwd": "\u78ba\u8a8d\u5bc6\u78bc", "home_phone": "\u5c45\u5bb6\u96fb\u8a71", "jobs": "\u806f\u55ae", "create_new_employee": "\u65b0\u5efa\u8077\u54e1", "search_by_serial": "\u4ee5\u806f\u55ae\u865f\u78bc\u67e5\u8a62", "code_list": "\u4ee3\u78bc\u76ee\u9304", "menu_home": "\u56de\u5230\u9996\u9801", "activerecord": {"errors": {"template": {"body": "\u8acb\u66f4\u6b63\u9019\u4e9b\u932f\u8aa4", "header": "\u4e00\u4e9b\u932f\u8aa4\u767c\u751f"}, "models": {"zone": {"attributes": {"code": {"too_short": "\u592a\u77ed", "taken": "\u5df2\u7d93\u5b58\u5728"}, "name": {"too_short": "\u592a\u77ed"}}}, "serial": {"attributes": {"serial": {"blank": "\u4e0d\u80fd\u7a7a\u767d"}}}, "employee": {"attributes": {"team": {"taken": "\u5df2\u7d93\u5b58\u5728"}, "taiwanid": {"taken": "\u5df2\u7d93\u5b58\u5728"}, "name": {"blank": "\u4e0d\u80fd\u7a7a\u767d"}}}, "user": {"attributes": {"password": {"blank": "\u4e0d\u80fd\u7a7a\u767d", "too_short": "\u592a\u77ed", "confirmation": "\u4e0d\u76f8\u914d"}, "login": {"blank": "\u4e0d\u80fd\u7a7a\u767d", "too_short": "\u592a\u77ed", "taken": "\u5df2\u7d93\u5b58\u5728"}, "password_confirmation": {"blank": "\u4e0d\u80fd\u7a7a\u767d"}, "email": {"blank": "\u4e0d\u80fd\u7a7a\u767d", "too_short": "\u592a\u77ed", "taken": "\u5df2\u7d93\u5b58\u5728"}}}, "phone": {"attributes": {"phone": {"blank": "\u4e0d\u80fd\u7a7a\u767d"}}}}}}, "viewer": "\u6d41\u89bd\u8005", "edited_msg": "\u5df2\u7de8\u8f2f", "editor": "\u7de8\u8f2f\u8005", "mdate": "\u65e5\u671f", "zone": "\u5730\u5340", "phone_length": "\u96fb\u8a71\u9577\u5ea6", "sort_by": "\u6392\u5e8f", "create_new_result": "\u65b0\u5efa\u7d50\u679c", "edit_employee": "\u7de8\u8f2f\u8077\u54e1", "fromdate": "\u5f9e\u65e5\u671f", "result": "\u7d50\u679c", "login_failed": "\u767b\u9304\u5931\u6557", "memo": "\u5099\u8a3b", "account": "\u767b\u9304\u5e33\u6236", "is_adjourner": "\u4f7f\u7528\u9019\u500b\u7d50\u679c\u7684\u806f\u55ae\u53ef\u4ee5\u5ef6\u9072", "serial_not_found": "\u627e\u4e0d\u5230\u9019\u500b\u806f\u55ae\u865f\u78bc", "code": "\u4ee3\u78bc", "todate": "\u5230\u65e5\u671f", "create_new_code_list": "\u65b0\u5efa\u4ee3\u78bc\u76ee\u9304", "today": "\u4eca\u5929", "created_msg": "\u5df2\u5efa\u7acb", "adjourn": "\u5ef6\u9072", "search_by_phone": "\u4ee5\u96fb\u8a71\u865f\u78bc\u67e5\u8a62", "job_already_exists": "\u8cc7\u6599\u5df2\u7d93\u5b58\u5728", "error": "\u932f\u8aa4", "notice": "\u901a\u77e5", "language": "\u8a9e\u8a00", "welcome": "\u6b61\u8fce", "confirm_action": "\u60a8\u78ba\u5b9a?", "name": "\u540d\u5b57", "reason": "\u539f\u56e0", "menu_zones": "\u5730\u5340\u7ba1\u7406", "team": "\u73ed\u5225", "logout": "\u767b\u51fa", "date": {"month_names": [null, "\u4e00\u6708", "\u4e8c\u6708", "\u4e09\u6708", "\u56db\u6708", "\u4e94\u6708", "\u516d\u6708", "\u4e03\u6708", "\u516b\u6708", "\u4e5d\u6708", "\u5341\u6708", "\u5341\u4e00\u6708", "\u5341\u4e8c\u6708"], "abbr_day_names": ["\u65e5", "\u4e00", "\u4e8c", "\u4e09", "\u56db", "\u4e94", "\u516d"], "order": ["year", "month", "day"], "day_names": ["\u661f\u671f\u65e5", "\u661f\u671f\u4e00", "\u661f\u671f\u4e8c", "\u661f\u671f\u4e09", "\u661f\u671f\u56db", "\u661f\u671f\u4e94", "\u661f\u671f\u516d"], "abbr_month_names": [null, "1\u6708", "2\u6708", "3\u6708", "4\u6708", "5\u6708", "6\u6708", "7\u6708", "8\u6708", "9\u6708", "10\u6708", "11\u6708", "12\u6708"], "formats": {"short": "%b%d\u65e5", "long": "%Y\u5e74%b%d\u65e5", "default": "%Y-%m-%d"}}, "too_many_records": "\u932f\u8aa4: \u7528\u9019\u4e9b\u689d\u4ef6\u8fd4\u56de\u592a\u591a\u8a18\u9304", "menu_job_types": "\u806f\u55ae\u985e\u578b", "logged_in": "\u60a8\u5df2\u7d93\u767b\u9304", "menu_action_log": "\u7db2\u7ad9\u8a2a\u554f", "job_type": "\u806f\u55ae\u985e\u578b", "job_search": "\u806f\u55ae\u67e5\u8a62", "order": "\u9806\u5e8f", "cell": "\u884c\u52d5\u96fb\u8a71", "menu_codes": "\u539f\u56e0\u7ba1\u7406", "create_new_code": "\u65b0\u5efa\u4ee3\u78bc", "edit_result": "\u7de8\u8f2f\u7d50\u679c", "logged_out": "\u60a8\u5df2\u7d93\u767b\u51fa", "pwd": "\u5bc6\u78bc", "admin": "\u7ba1\u7406\u8005", "address": "\u5730\u5740", "taiwanid": "\u8eab\u5206\u8b49\u5b57\u865f", "phone_not_found": "\u627e\u4e0d\u5230\u9019\u500b\u96fb\u8a71\u865f\u78bc", "edit": "\u7de8\u8f2f", "phone": "\u96fb\u8a71\u865f\u78bc", "time": {"am": "AM", "formats": {"short": "%b%d\u65e5 %H:%M", "long": "%Y\u5e74%b%d\u65e5 %H:%M", "time": "%H:%M", "default": "%Y\u5e74%b%d\u65e5 %A %H:%M:%S %Z"}, "pm": "PM"}, "admin_menu_section": "\u7db2\u7ad9\u7ba1\u7406", "add_exception": "\u65b0\u5efa\u9577\u5ea6\u4f8b\u5916", "edit_zone": "\u7de8\u8f2f\u5730\u5340", "serial_length_error": "\u806f\u55ae\u9577\u5ea6\u932f\u8aa4", "menu_users": "\u7db2\u7ad9\u5e33\u6236", "menu_employees": "\u516c\u53f8\u8077\u54e1"}};

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
