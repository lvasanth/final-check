function valid() {
    var name = document.forms["form"]["name"].value;
    var boxoffice = document.forms["form"]["boxoffice"].value;
    var dateofLaunch = document.forms["form"]["dateofLaunch"].value;
    var genre = document.forms["form"]["genre"].value;

    if (name == "") {
        alert("Title is required. ");
        return false;
    } else if (name.length < 2 || name.length > 100) {
        alert("Title should have 2 to 100 characters.");
        return false;
    }

    else if (boxoffice == "") {
        alert("Box Office is required. ");
        return false;
    } else if (isNaN(boxoffice)) {
        alert("Box Office has to be a number.");
        return false;
    }

    else if (dateofLaunch == "") {
        alert("Date of Launch is required. ");
        return false;
    }

    else if (genre == "") {
        alert("Select one genre ");
        return false;
    } else {
        document.getElementById("genre").innerHTML = "";
    }

}
