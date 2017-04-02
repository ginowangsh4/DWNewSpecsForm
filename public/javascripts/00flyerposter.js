// This will generate the text file content based on the form data
function buildData(){
    var txtData =
            "\r\n" +
            "\r\nPoster Flyer Design Form" +
            "\r\n" +
            "\r\n##########################" +
            "\r\n### General Infomation ###" +
            "\r\n##########################" +
            "\r\nName: "+$("#nameInput").val()+
            "\r\n" +

            "\r\nOrganzation: "+$("#organizationInput").val()+
            "\r\n" +

            "\r\nPhone Number: "+$("#phoneInput").val()+
            "\r\n" +

            "\r\nEmail: "+$("#emailInput").val()+
            "\r\n" +

            "\r\nHow do you hear about us:" +
            ($("#facebookInput").is(":checked")?" Facebook,":"") +
            ($("#instagramInput").is(":checked")?" Instagram,":"") +
            ($("#campusInput").is(":checked")?" Campus Flyer,":"") +
            ($("#nshInput").is(":checked")?" Northwestern Student Holdings,":"") +
            ($("#fairInput").is(":checked")?" Organization Fair,":"") +
            ($("#wordInput").is(":checked")?" Word of Mouth,":"") +
            ($("#searchInput").is(":checked")?" Online Search":"") +
            "\r\n" +

            "\r\n##############################" +
            "\r\n## Design Specfic Questions ##" +
            "\r\n##############################" +
            "\r\nWhat paper size?: "+$("#papersizeInput").val()+
            "\r\n" +
            "\r\nWhat text would you like to include?: "+$("#textInput").val()+

            "\r\n" +
            "\r\n#######################" +
            "\r\n### Visual Elements ###"+
            "\r\n#######################" +
            "\r\nWhat kind of style would you prefer?: "+
            ($("#miniInput").is(":checked")?" Minimalist,":"") +
            ($("#photoInput").is(":checked")?" Photo-centered,":"") +
            ($("#boldInput").is(":checked")?" Bold Font,":"") +
            ($("#geoInput").is(":checked")?" Geometry,":"") +
            ($("#classyInput").is(":checked")?" Classy,":"") +
            ($("#retroInput").is(":checked")?" Retro,":"") +
            ($("#doodleInput").is(":checked")?" Doodle,":"") +
            ($("#illustrationInput").is(":checked")?" Illustration":"") +
            "\r\n" +
            "\r\nAdded color 1: "+$("#color1Input").val()+
            "\r\n" +
            "\r\nAdded color 2: "+$("#color2Input").val()+
            "\r\n" +
            "\r\nDo you have any branding elements?: "+$("#brandingInput").val()+
            "\r\n" +
            "\r\nAdditional comments: "+$("#commentInput").val();

    return txtData;
}
// This will be executed when the document is ready
$(function(){
    // This will act when the submit LINK is clicked
    $("#submitLink").click(function(event){
        var txtData = buildData();
        $(this).attr('download',"Flyer/poster_"+$("#nameInput").val()+'_'+$('#organizationInput').val()+'.txt')
            .attr('href',"data:application/octet-stream;base64,"+Base64.encode(txtData));
    });
});
