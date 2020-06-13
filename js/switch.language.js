function switchLanguage() {
    if (document.getElementById("switch").checked == true) {
                    document.getElementById("pos").innerHTML = "Développeuse Full Stack";
                    document.getElementById("menu_home").innerHTML = "Accueil";
                    document.getElementById("menu_about").innerHTML = "Intro";
                    document.getElementById("menu_skills").innerHTML = "Compétences";
                    document.getElementById("menu_education").innerHTML = "Formation";
                    document.getElementById("menu_experience").innerHTML = "Expérience";
                    document.getElementById("menu_work").innerHTML = "Mais encore ?";
                    document.getElementById("menu_contact").innerHTML = "Contact";
                    document.getElementById("need").innerHTML = "Un projet ?";
                    document.getElementById("tell").innerHTML = "Besoin d'une développeuse ?";
                    document.getElementById("mail_me").innerHTML = "Parlons-en ! <i class=\"icon-mail\"></i>";
                    document.getElementById("about_me").innerHTML = "Intro";
                    document.getElementById("who").innerHTML = "< Qui suis-je ? />";
                    document.getElementById("past").innerHTML = "Anciennement <strong>juriste</strong>, désormais <strong>développeuse</strong>, reconvertie et convertie, j'ai découvert, avec la programmation, un puits inépuisable de connaissances, technos, savoir-faire et savoir-être, bonnes et mauvaises pratiques, et, surtout, les immenses joie et satisfaction <strong>d'apprendre et d'évoluer quotidiennement</strong>.";
                    document.getElementById("future").innerHTML = "Beaucoup reste à apprendre, et tant mieux !";
                    document.getElementById("interest").innerHTML = "Intérêt particulier pour la qualité logicielle et l'artisanat du logiciel.";
                    document.getElementById("about_skills").innerHTML = "Compétences";
                    document.getElementById("compet").innerHTML = "< Que sais-je faire ? />";
                    document.getElementById("lbl_lines").innerHTML = "lignes de code";
                    document.getElementById("lbl_coffee").innerHTML = "tasses de café";
                    document.getElementById("lbl_projects").innerHTML = "projets personnels";
                    document.getElementById("lbl_dreams").innerHTML = "rêves";
                    document.getElementById("about_education").innerHTML = "Formation";
                    document.getElementById("school").innerHTML = "< Qu'ai-je appris ? />";
                    document.getElementById("isika").innerHTML = "Architecte logiciel _ niveau Master II _ cursus intensif de 10 mois";
                    document.getElementById("isika_1").innerHTML = "Conception & dévelopemment de logiciels : P00, Algorithmes, Bases de données, Technologies Web (6 mois)";
                    document.getElementById("isika_2").innerHTML = "Expertise Jakarta EE, Qualité logicielle, Intégration et livraison continues (2 mois)";
                    document.getElementById("isika_3").innerHTML = "DevOps & Big Data (2 mois)";
                    document.getElementById("law_master").innerHTML = "Master II _ Droits humains et Union européenne (avec mention)";
                    document.getElementById("law_bachelor").innerHTML = "Licence _ Droit international et européen";
                    document.getElementById("lea_bachelor").innerHTML = "Licence _ Langues étrangères appliquées";
                    document.getElementById("fac").innerHTML = "Université Paris I - Sorbonne";
                    document.getElementById("fac_2").innerHTML = "Université Paris I - Sorbonne";
                    document.getElementById("fac_3").innerHTML = "Université Paris IV - Sorbonne";
                    document.getElementById("about_experience").innerHTML = "Expérience";
                    document.getElementById("pro").innerHTML = "< Où ai-je travaillé ? />";
                    document.getElementById("poste").innerHTML = "Développeuse Full Stack";
                    document.getElementById("viveris").innerHTML = "Viveris - Paris - depuis octobre 2019";
                    document.getElementById("viveris_1").innerHTML = "Développement d'un outil de recrutement par cooptation à destination de chargé.es de recrutement de l'entreprise";
                    document.getElementById("else").innerHTML = "Mais encore ?";
                    document.getElementById("personal_p").innerHTML = "< Projets personnels />";
                    document.getElementById("explorer").innerHTML = "Moteur de recherche permettant d'obtenir des informations générales sur le pays de votre choix utilisant une <a href=\"https://restcountries.eu/\">API publique";
                    document.getElementById("code").innerHTML = "Voir le code";
                    document.getElementById("site").innerHTML = "Voir le site";
                    document.getElementById("countain").innerHTML = "Application de bureau pour la gestion du budget personnel";
                    document.getElementById("code_1").innerHTML = "Voir le code";
                    document.getElementById("touch").innerHTML = "Contact";
                    document.getElementById("write").innerHTML = "< Parlons-en ! />";
                    document.getElementById("tm").innerHTML = "Tous droits réservés";
                    document.getElementById("credits").innerHTML = "Images libres des photographes talentueuses.x sur ";
                    document.getElementById("craft").innerHTML = "Qualité & IC";
                    document.getElementById("isika_link").innerHTML = "Isika - Formation aux métiers du numérique";
                } else {
                    document.getElementById("pos").innerHTML = "Full Stack Developer";
                    document.getElementById("menu_home").innerHTML = "Home";
                    document.getElementById("menu_about").innerHTML = "About";
                    document.getElementById("menu_skills").innerHTML = "Skills";
                    document.getElementById("menu_education").innerHTML = "Education";
                    document.getElementById("menu_experience").innerHTML = "Experience";
                    document.getElementById("menu_work").innerHTML = "Whats else ?";
                    document.getElementById("menu_contact").innerHTML = "Contact";
                    document.getElementById("need").innerHTML = "Need a Developer ?";
                    document.getElementById("tell").innerHTML = "Tell me about your project !";
                    document.getElementById("mail_me").innerHTML = "Contact me <i class=\"icon-mail\"></i>";
                    document.getElementById("about_me").innerHTML = "About me";
                    document.getElementById("who").innerHTML = "< Who Am I? />";
                    document.getElementById("past").innerHTML = "A former <strong>lawyer</strong>, now a <strong>software developer</strong>, I discovered thanks to programming, a world full of knowledge, technologies, know-how, good and bad practices, and most importantly, the biggest joy and satisfaction from <strong>learning and getting better every single day</strong>.";
                    document.getElementById("future").innerHTML = "There is still so much to learn, and I hope it always will be !";
                    document.getElementById("interest").innerHTML = "Particular interest for Quality Code & Software Crafts.wo.manship.";
                    document.getElementById("about_skills").innerHTML = "About My Skills";
                    document.getElementById("compet").innerHTML = "< What can I do ? />";
                    document.getElementById("lbl_lines").innerHTML = "Lines of code";
                    document.getElementById("lbl_coffee").innerHTML = "cups of coffee";
                    document.getElementById("lbl_projects").innerHTML = "personal projects";
                    document.getElementById("lbl_dreams").innerHTML = "dreams";
                    document.getElementById("about_education").innerHTML = "About Education";
                    document.getElementById("school").innerHTML = "< What did I learn ? />";
                    document.getElementById("isika").innerHTML = "Software Architect _ 10 months intesive reskilling coding programm";
                    document.getElementById("isika_1").innerHTML = "Software engineering : OOP, Algorithms, Databases, Web Technologies (6 months)";
                    document.getElementById("isika_2").innerHTML = "Expertise Jakarta EE, Software Quality, CI/CD (2 months)";
                    document.getElementById("isika_3").innerHTML = "DevOps & Big Data (2 months)";
                    document.getElementById("law_master").innerHTML = "Master’s Degree _ Human Rights & European Law (with honours)";
                    document.getElementById("law_bachelor").innerHTML = "Bachelor Degree _ International and European Law";
                    document.getElementById("lea_bachelor").innerHTML = "Bachelor Degree _ Foreign Languages";
                    document.getElementById("fac").innerHTML = "University Paris I - Sorbonne";
                    document.getElementById("fac_2").innerHTML = "University Paris I - Sorbonne";
                    document.getElementById("fac_3").innerHTML = "University Paris IV - Sorbonne";
                    document.getElementById("about_experience").innerHTML = "About Work";
                    document.getElementById("pro").innerHTML = "< Where did I work ? />";
                    document.getElementById("poste").innerHTML = "Full Stack Developer";
                    document.getElementById("viveris").innerHTML = "Viveris - Paris - since October 2019";
                    document.getElementById("viveris_1").innerHTML = "Recruiting Platform by Co-optation for the internal use by Talent Acquisition Specialists";
                    document.getElementById("else").innerHTML = "Something else ?";
                    document.getElementById("personal_p").innerHTML = "< Personal Projects />";
                    document.getElementById("explorer").innerHTML = "Website displaying useful information about the countries of your choice using a <a href=\"https://restcountries.eu/\">public REST API";
                    document.getElementById("code").innerHTML = "See the code";
                    document.getElementById("site").innerHTML = "See the website";
                    document.getElementById("countain").innerHTML = "Desktop application designed to manage personal finances";
                    document.getElementById("code_1").innerHTML = "See the code";
                    document.getElementById("touch").innerHTML = "Get in Touch";
                    document.getElementById("write").innerHTML = "< Contact />";
                    document.getElementById("tm").innerHTML = "All rights reserved";
                    document.getElementById("credits").innerHTML = "Pictures gratefully taken from ";
                    document.getElementById("craft").innerHTML = "Quality & CI";
                    document.getElementById("isika_link").innerHTML = "Isika - Software Development Training Courses";
                   
                }
                
// $.ajax({
//     url: '../language/en.json',
//     dataType: "json",
//     headers: {
//         'Access-Control-Allow-Origin': '*',
//       },
//     success: function (data) {
//         if (document.getElementById("switch").checked == true) {
//             document.getElementById("pos").innerHTML = data.position;
//         } else document.getElementById("pos").innerHTML = data.position;}
//   });
    
}