// This will generate the text file content based on the form data
function buildData(){
    var txtData =
            "\r\n" +
            "\r\nWebsite Design Form" +
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
            "\r\nAre you creating a new website or revising an existing one?: "+$("#1Input").val()+
            "\r\n" +
            "\r\nHow many pages do you want?: "+$("#2Input").val()+
            "\r\n" +
            "\r\nDo you want your website linked to any external services that require a widget installation (twitter, facebook, etc)?:" +
            ($("#yes1").is(":checked")?" Yes":"") +
            ($("#no1").is(":checked")?" No":"") +
            "\r\n" +
            "\r\nDo you want your website to have any javascipt animations?:" +
            ($("#yes2").is(":checked")?" Yes":"") +
            ($("#no2").is(":checked")?" No":"") +
            "\r\n" +
            "\r\nDo you want the website to be responsive (i.e. adaptable to different devices, orientations, and platforms)?:" +
            ($("#yes3").is(":checked")?" Yes":"") +
            ($("#no3").is(":checked")?" No":"") +
            "\r\n" +
            "\r\nAre there any websites you like or would like us to model yours after? If so, please provide URLs.: "+$("#3Input").val()+
            "\r\n" +
            "\r\nWhat text would you like to include on each page? (Include file upload option here): "+$("#4Input").val()+
            "\r\n" +
            "\r\nDo you want us to design your website for you? If not, please upload any prototypes or mock-ups.:" +
            ($("#yes4").is(":checked")?" Yes":"") +
            ($("#no4").is(":checked")?" No":"") +
            ($("#notsure").is(":checked")?" No":"") +

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
        $(this).attr('download',"Website_"+$("#nameInput").val()+'_'+$('#organizationInput').val()+'.txt')
            .attr('href',"data:application/octet-stream;base64,"+Base64.encode(txtData));
    });
});
