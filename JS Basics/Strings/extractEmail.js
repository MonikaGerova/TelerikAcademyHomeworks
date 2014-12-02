(function () {
    function extractEmails (text)
    {
        return text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
    }

    var email = 'this is my email address so please write me! azzz@abv.bg  .. I have another one mgerva@abv.bg';

    var extracted = extractEmails(email);

    console.log(extracted)
}());