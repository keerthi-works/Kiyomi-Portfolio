function sendContact() {
    "use strict";
    // document.querySelectorAll('.sent-message');
    
    let forms = document.querySelectorAll('#contact-form');
    
    forms.forEach( function(e) {
        e.addEventListener('submit', function(event) {
        event.preventDefault();
    
        let thisForm = this;
    
        let formData = new FormData( thisForm );
    
        let msg = ' \
        <!DOCTYPE html> \
        <html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en"> \
        \
        <head> \
            <title></title> \
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8"> \
            <meta name="viewport" content="width=device-width, initial-scale=1.0"><!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]--><!--[if !mso]><!--> \
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900" rel="stylesheet" type="text/css"> \
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap" rel="stylesheet" type="text/css"><!--<![endif]--> \
            <style> \
                * { \
                    box-sizing: border-box; \
                } \
                body { \
                    margin: 0; \
                    padding: 0; \
                } \
                a[x-apple-data-detectors] { \
                    color: inherit !important; \
                    text-decoration: inherit !important; \
                } \
                #MessageViewBody a { \
                    color: inherit; \
                    text-decoration: none; \
                } \
                p { \
                    line-height: inherit; \
                } \
                .desktop_hide, \
                .desktop_hide table { \
                    mso-hide: all; \
                    display: none; \
                    max-height: 0px; \
                    overflow: hidden; \
                } \
                .image_block img+div { \
                    display: none; \
                } \
                @media (max-width:700px) { \
                    \
                    .desktop_hide table.icons-inner, \
                    .social_block.desktop_hide .social-table { \
                        display: inline-block !important; \
                    } \
                    .icons-inner { \
                        text-align: center; \
                    } \
                    .icons-inner td { \
                        margin: 0 auto; \
                    } \
                    .mobile_hide { \
                        display: none; \
                    } \
                    .theme-dark { \
                        background-color: transparent !important; \
                      } \
                    .row-content { \
                        width: 100% !important; \
                    } \
                    .stack .column { \
                        width: 100%; \
                        display: block; \
                    } \
                    .mobile_hide { \
                        min-height: 0; \
                        max-height: 0; \
                        max-width: 0; \
                        overflow: hidden; \
                        font-size: 0px; \
                    } \
                    .desktop_hide, \
                    .desktop_hide table { \
                        display: table !important; \
                        max-height: none !important; \
                    } \
                    .row-1 .column-1 .block-4.spacer_block { \
                        height: 10px !important; \
                        line-height:10px !important; \
                    } \
                    .row-1 .column-1 .block-12.spacer_block { \
                        height: 120px !important; \
                        line-height:120px !important; \
                    } \
                    .row-1 .column-1 .block-5.heading_block h1 { \
                        font-size: 33px !important; \
                    } \
                    .row-1 .column-1 .block-6.heading_block h2 { \
                        font-size: 16px !important; \
                    } \
                    .row-1 .column-1 .block-9.paragraph_block td.pad { \
                        padding: 10px 15px 15px !important; \
                    } \
                } \
                \
            </style> \
        </head> \
        \
        <body style="background-color: #e2fafd; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;"> \
            <table class="nl-container" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #e2fafd;"> \
                <tbody> \
                    <tr> \
                        <td> \
                            <table class="row row-1" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-size: auto;"> \
                                <tbody> \
                                    <tr> \
                                        <td> \
                                            <table class="row-content stack theme-dark" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-size: auto; background-color: #c2f3f8; background-image: url(\'https://adconstruction.org.in/assets/images/mail/email-back.png\'); background-position: top center; background-repeat: no-repeat; color: #000000; width: 680px; margin: 0 auto;" width="680"> \
                                                <tbody> \
                                                    <tr> \
                                                        <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"> \
                                                            <div class="spacer_block block-1" style="height:25px;line-height:25px;font-size:1px;">&#8202;</div> \
                                                            <table class="image_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"> \
                                                                <tr> \
                                                                    <td class="pad" style="width:100%;"> \
                                                                        <div class="alignment" align="center" style="line-height:10px"> \
                                                                            <div style="max-width: 300px;"><a href="https://adconstruction.org.in/" data-saferedirecturl="https://www.google.com/url?q=https://adconstruction.org.in/" target="_blank" style="outline:none" tabindex="-1"><img src="https://adconstruction.org.in/assets/images/logo-header.png" width="300px" style="display: block; height: auto; border: 0; width: 100%;" alt="logo-image" title="ADC-logo"></a></div> \
                                                                        </div> \
                                                                    </td> \
                                                                </tr> \
                                                            </table> \
                                                            <div class="spacer_block block-3" style="height:50px;line-height:50px;font-size:1px;">&#8202;</div> \
                                                            <div class="spacer_block block-4" style="height:40px;line-height:40px;font-size:1px;">&#8202;</div> \
                                                            <table class="heading_block block-5" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"> \
                                                                <tr> \
                                                                    <td class="pad" style="padding-top:10px;text-align:center;width:100%;"> \
                                                                        <h1 class="theme-dark" style="margin: 0; color: #000000; direction: ltr; font-family: \'Montserrat\', \'Trebuchet MS\', \'Lucida Grande\', \'Lucida Sans Unicode\', \'Lucida Sans\', Tahoma, sans-serif; font-size: 38px; font-weight: 700; letter-spacing: normal; line-height: 150%; text-align: center; margin-top: 0; margin-bottom: 0; mso-line-height-alt: 57px;"><span class="tinyMce-placeholder">THANK YOU!</span></h1> \
                                                                    </td> \
                                                                </tr> \
                                                            </table> \
                                                            <table class="heading_block block-6" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"> \
                                                                <tr> \
                                                                    <td class="pad" style="padding-bottom:10px;text-align:center;width:100%;"> \
                                                                        <h2 class="theme-dark" style="margin: 0; color: #000000; direction: ltr; font-family: \'Montserrat\', \'Trebuchet MS\', \'Lucida Grande\', \'Lucida Sans Unicode\', \'Lucida Sans\', Tahoma, sans-serif; font-size: 22px; font-weight: 400; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0; mso-line-height-alt: 26.4px;"><span class="tinyMce-placeholder">FOR GETTING IN TOUCH WITH US!</span></h2> \
                                                                    </td> \
                                                                </tr> \
                                                            </table> \
                                                            <table class="divider_block block-7" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"> \
                                                                <tr> \
                                                                    <td class="pad"> \
                                                                        <div class="alignment" align="center"> \
                                                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="55%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"> \
                                                                                <tr> \
                                                                                    <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 1px solid #575757;"><span>&#8202;</span></td> \
                                                                                </tr> \
                                                                            </table> \
                                                                        </div> \
                                                                    </td> \
                                                                </tr> \
                                                            </table> \
                                                            <div class="spacer_block block-8" style="height:25px;line-height:25px;font-size:1px;">&#8202;</div> \
                                                            <table class="paragraph_block block-9" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"> \
                                                                <tr> \
                                                                    <td class="pad" style="padding-bottom:15px;padding-top:10px;"> \
                                                                        <div class="theme-dark" style="color:#000000;direction:ltr;font-family: \'Open Sans\', \'Helvetica Neue\', Helvetica, Arial, sans-serif;font-size:14px;font-weight:300;letter-spacing:0px;line-height:150%;text-align:center;mso-line-height-alt:21px;"> \
                                                                            <p style="margin: 0; margin-bottom: 16px;">We appreciate your interest in our services.<br>Our team has received your inquiry, and we&#39;re here to assist you.</p> \
                                                                            <p style="margin: 0;">We will review your message and get back to you promptly.<br>If you have any urgent matters, please feel free to call us directly at <a href="tel:+919962002957" target="_blank" class="theme-dark" style="text-decoration: none; color:#000000;">+91&nbsp;99620&nbsp;02957</a><br><br>Thank you for considering AD Construction for your construction needs.<br>We look forward to assisting you!<br><br>Best regards,<br>AD CONSTRUCTIONS</p> \
                                                                        </div> \
                                                                    </td> \
                                                                </tr> \
                                                            </table> \
                                                            <div class="spacer_block block-10" style="height:20px;line-height:20px;font-size:1px;">&#8202;</div> \
                                                            <div class="spacer_block block-12" style="height:165px;line-height:165px;font-size:1px;">&#8202;</div> \
                                                        </td> \
                                                    </tr> \
                                                </tbody> \
                                            </table> \
                                        </td> \
                                    </tr> \
                                </tbody> \
                            </table> \
                            <table class="row row-2" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"> \
                                <tbody> \
                                    <tr> \
                                        <td> \
                                            <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #dfffae; border-radius: 0; color: #000000; width: 680px; margin: 0 auto;" width="680"> \
                                                <tbody> \
                                                    <tr> \
                                                        <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"> \
                                                            <table class="divider_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"> \
                                                                <tr> \
                                                                    <td class="pad" style="padding-bottom:10px;"> \
                                                                        <div class="alignment" align="center"> \
                                                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"> \
                                                                                <tr> \
                                                                                    <td class="divider_inner theme-dark" style="font-size: 1px; line-height: 1px; border-top: 1px solid #000000;"><span>&#8202;</span></td> \
                                                                                </tr> \
                                                                            </table> \
                                                                        </div> \
                                                                    </td> \
                                                                </tr> \
                                                            </table> \
                                                        </td> \
                                                    </tr> \
                                                </tbody> \
                                            </table> \
                                        </td> \
                                    </tr> \
                                </tbody> \
                            </table> \
                            <table class="row row-3" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"> \
                                <tbody> \
                                    <tr> \
                                        <td> \
                                            <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #dfffae; border-radius: 0; color: #000000; width: 680px; margin: 0 auto;" width="680"> \
                                                <tbody> \
                                                    <tr> \
                                                        <td class="column column-1" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; padding-top: 10px; vertical-align: middle; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"> \
                                                            <table class="text_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"> \
                                                                <tr> \
                                                                    <td class="pad" style="padding-bottom:5px;padding-left:10px;padding-right:10px;padding-top:5px;"> \
                                                                        <div style="font-family: \'Trebuchet MS\', Tahoma, sans-serif;"> \
                                                                            <div class="" style="font-size: 12px; font-family: \'Montserrat\', \'Trebuchet MS\', \'Lucida Grande\', \'Lucida Sans Unicode\', \'Lucida Sans\', Tahoma, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #ffffff; line-height: 1.2;"> \
                                                                                <p style="margin: 0; font-size: 18px; text-align: left; mso-line-height-alt: 21.599999999999998px;"><strong><span style="font-size:14px;color:#000000;"><span style="">Social media</span></span></strong></p> \
                                                                            </div> \
                                                                        </div> \
                                                                    </td> \
                                                                </tr> \
                                                            </table> \
                                                            <table class="text_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"> \
                                                                <tr> \
                                                                    <td class="pad" style="padding-bottom:10px;padding-left:10px;padding-right:20px;padding-top:10px;"> \
                                                                        <div style="font-family: Arial, sans-serif"> \
                                                                            <div class="" style="font-size: 12px; font-family: \'Open Sans\', \'Helvetica Neue\', Helvetica, Arial, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #C0C0C0; line-height: 1.2;"> \
                                                                                <p style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 16.8px;"><span style="color:#454545;font-size:12px;">Stay up-to-date with current activities by following us on your favorite social media channels.</span></p> \
                                                                            </div> \
                                                                        </div> \
                                                                    </td> \
                                                                </tr> \
                                                            </table> \
                                                            <table class="social_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"> \
                                                                <tr> \
                                                                    <td class="pad" style="text-align:left;padding-right:0px;padding-left:0px;"> \
                                                                        <div class="alignment" align="left"> \
                                                                            <table class="social-table" width="144px" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block;"> \
                                                                                <tr> \
                                                                                    <td style="padding:0 4px 0 0;"><a href="https://www.facebook.com/aaesthetic" target="_blank"><img src="https://api.smtprelay.co/userfile/0629cb15-f5a9-400d-85e2-94649dce555b/facebook-icon.png" width="32" height="32" alt="Facebook" title="Facebook" style="display: block; height: auto; border: 0;"></a></td> \
                                                                                    <td style="padding:0 4px 0 0;"><a href="https://www.instagram.com/__aesthetic_designs__/" target="_blank"><img src="https://api.smtprelay.co/userfile/0629cb15-f5a9-400d-85e2-94649dce555b/instagram-icon.png" width="32" height="32" alt="Instagram" title="Instagram" style="display: block; height: auto; border: 0;"></a></td> \
                                                                                    <td style="padding:0 4px 0 0;"><a href="https://www.linkedin.com/company/aesthetic-dsgnz" target="_blank"><img src="https://api.smtprelay.co/userfile/0629cb15-f5a9-400d-85e2-94649dce555b/linkedin-icon.png" width="32" height="32" alt="LinkedIn" title="LinkedIn" style="display: block; height: auto; border: 0;"></a></td> \
                                                                                    <td style="padding:0 4px 0 0;"><a href="https://www.youtube.com/@aesthetic_dsgnz" target="_blank"><img src="https://api.smtprelay.co/userfile/0629cb15-f5a9-400d-85e2-94649dce555b/youtube-icon.png" width="32" height="32" alt="Youtube" title="Youtube" style="display: block; height: auto; border: 0;"></a></td> \
                                                                                </tr> \
                                                                            </table> \
                                                                        </div> \
                                                                    </td> \
                                                                </tr> \
                                                            </table> \
                                                        </td> \
                                                        <td class="column column-2" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; padding-top: 10px; vertical-align: middle; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"> \
                                                            <table class="text_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"> \
                                                                <tr> \
                                                                    <td class="pad" style="padding-bottom:5px;padding-left:10px;padding-right:10px;padding-top:5px;"> \
                                                                        <div style="font-family: \'Trebuchet MS\', Tahoma, sans-serif;"> \
                                                                            <div class="" style="font-size: 12px; font-family: \'Montserrat\', \'Trebuchet MS\', \'Lucida Grande\', \'Lucida Sans Unicode\', \'Lucida Sans\', Tahoma, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #ffffff; line-height: 1.2;"> \
                                                                                <p style="margin: 0; font-size: 18px; text-align: left; mso-line-height-alt: 21.599999999999998px;"><span style="font-size:14px;color:#000000;"><strong><span style="">Where to find us</span></strong></span></p> \
                                                                            </div> \
                                                                        </div> \
                                                                    </td> \
                                                                </tr> \
                                                            </table> \
                                                            <table class="text_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"> \
                                                                <tr> \
                                                                    <td class="pad" style="padding-bottom:5px;padding-left:10px;padding-right:10px;padding-top:10px;"> \
                                                                        <div style="font-family: Arial, sans-serif"> \
                                                                            <div class="" style="font-size: 12px; font-family: \'Open Sans\', \'Helvetica Neue\', Helvetica, Arial, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #3f3f3f; line-height: 1.2;"> \
                                                                                <a href="https://maps.app.goo.gl/dwiTQF4N6cwkTu9N6" target="_blank" style="text-decoration:none;"> \
                                                                                    <p style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 16.8px;"><span style="color:#454545;font-size:12px;">Plot No.88, Ground Floor,<br>Kingsland Street, VGN Brent Park,<br>Ambattur, Chennai, <br>Tamilnadu - 600058</span></p> \
                                                                                  </a> \
                                                                            </div> \
                                                                        </div> \
                                                                    </td> \
                                                                </tr> \
                                                            </table> \
                                                        </td> \
                                                    </tr> \
                                                </tbody> \
                                            </table> \
                                        </td> \
                                    </tr> \
                                </tbody> \
                            </table> \
                        </td> \
                    </tr> \
                </tbody> \
            </table><!-- End --> \
        </body> \
        \
        </html>';
        
    
        let msg2 = ' \
        <!DOCTYPE html> \
        <html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en"> \
        \
        <head> \
            <title></title> \
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8"> \
            <meta name="viewport" content="width=device-width, initial-scale=1.0"><!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]--><!--[if !mso]><!--> \
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900" rel="stylesheet" type="text/css"> \
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap" rel="stylesheet" type="text/css"><!--<![endif]--> \
            <style> \
                * { \
                    box-sizing: border-box; \
                } \
                body { \
                    margin: 0; \
                    padding: 0; \
                } \
                a[x-apple-data-detectors] { \
                    color: inherit !important; \
                    text-decoration: inherit !important; \
                } \
                #MessageViewBody a { \
                    color: inherit; \
                    text-decoration: none; \
                } \
                p { \
                    line-height: inherit; \
                } \
                .desktop_hide, \
                .desktop_hide table { \
                    mso-hide: all; \
                    display: none; \
                    max-height: 0px; \
                    overflow: hidden; \
                } \
                .image_block img+div { \
                    display: none; \
                } \
                @media (max-width:700px) { \
                    \
                    .desktop_hide table.icons-inner, \
                    .social_block.desktop_hide .social-table { \
                        display: inline-block !important; \
                    } \
                    .icons-inner { \
                        text-align: center; \
                    } \
                    .icons-inner td { \
                        margin: 0 auto; \
                    } \
                    .mobile_hide { \
                        display: none; \
                    } \
                    .theme-dark { \
                        background-color: transparent !important; \
                      } \
                    .row-content { \
                        width: 100% !important; \
                    } \
                    .stack .column { \
                        width: 100%; \
                        display: block; \
                    } \
                    .mobile_hide { \
                        min-height: 0; \
                        max-height: 0; \
                        max-width: 0; \
                        overflow: hidden; \
                        font-size: 0px; \
                    } \
                    .desktop_hide, \
                    .desktop_hide table { \
                        display: table !important; \
                        max-height: none !important; \
                    } \
                    .row-1 .column-1 .block-4.spacer_block { \
                        height: 10px !important; \
                        line-height:10px !important; \
                    } \
                    .row-1 .column-1 .block-12.spacer_block { \
                        height: 120px !important; \
                        line-height:120px !important; \
                    } \
                    .row-1 .column-1 .block-5.heading_block h1 { \
                        font-size: 33px !important; \
                    } \
                    .row-1 .column-1 .block-6.heading_block h2 { \
                        font-size: 16px !important; \
                    } \
                    .row-1 .column-1 .block-9.paragraph_block td.pad { \
                        padding: 10px 15px 15px !important; \
                    } \
                } \
                \
            </style> \
        </head> \
        \
        <body style="background-color: #e2fafd; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;"> \
            <table class="nl-container" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #e2fafd;"> \
                <tbody> \
                    <tr> \
                        <td> \
                            <table class="row row-1" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-size: auto;"> \
                                <tbody> \
                                    <tr> \
                                        <td> \
                                            <table class="row-content stack theme-dark" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-size: auto; background-color: #c2f3f8; background-image: url(\'https://adconstruction.org.in/assets/images/mail/email-back.png\'); background-position: top center; background-repeat: no-repeat; color: #000000; width: 680px; margin: 0 auto;" width="680"> \
                                                <tbody> \
                                                    <tr> \
                                                        <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"> \
                                                            <div class="spacer_block block-1" style="height:25px;line-height:25px;font-size:1px;">&#8202;</div> \
                                                            <table class="image_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"> \
                                                                <tr> \
                                                                    <td class="pad" style="width:100%;"> \
                                                                        <div class="alignment" align="center" style="line-height:10px"> \
                                                                            <div style="max-width: 300px;"><a href="https://adconstruction.org.in/" data-saferedirecturl="https://www.google.com/url?q=https://adconstruction.org.in/" target="_blank" style="outline:none" tabindex="-1"><img src="https://adconstruction.org.in/assets/images/logo-header.png" width="300px" style="display: block; height: auto; border: 0; width: 100%;" alt="logo-image" title="ADC-logo"></a></div> \
                                                                        </div> \
                                                                    </td> \
                                                                </tr> \
                                                            </table> \
                                                            <div class="spacer_block block-3" style="height:50px;line-height:50px;font-size:1px;">&#8202;</div> \
                                                            <div class="spacer_block block-4" style="height:40px;line-height:40px;font-size:1px;">&#8202;</div> \
                                                            <table class="heading_block block-5" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"> \
                                                                <tr> \
                                                                    <td class="pad" style="padding-top:10px;text-align:center;width:100%;"> \
                                                                        <h1 class="theme-dark" style="margin: 0; color: #000000; direction: ltr; font-family: \'Montserrat\', \'Trebuchet MS\', \'Lucida Grande\', \'Lucida Sans Unicode\', \'Lucida Sans\', Tahoma, sans-serif; font-size: 38px; font-weight: 700; letter-spacing: normal; line-height: 150%; text-align: center; margin-top: 0; margin-bottom: 0; mso-line-height-alt: 57px;"><span class="tinyMce-placeholder">NEW CONTACT INQUIRY!</span></h1> \
                                                                    </td> \
                                                                </tr> \
                                                            </table> \
                                                            <table class="heading_block block-6" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"> \
                                                                <tr> \
                                                                    <td class="pad" style="padding-bottom:10px;text-align:center;width:100%;"> \
                                                                        <h2 class="theme-dark" style="margin: 0; color: #000000; direction: ltr; font-family: \'Montserrat\', \'Trebuchet MS\', \'Lucida Grande\', \'Lucida Sans Unicode\', \'Lucida Sans\', Tahoma, sans-serif; font-size: 22px; font-weight: 400; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0; mso-line-height-alt: 26.4px;"><span class="tinyMce-placeholder">FROM AD CONSTRUCTION!</span></h2> \
                                                                    </td> \
                                                                </tr> \
                                                            </table> \
                                                            <table class="divider_block block-7" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"> \
                                                                <tr> \
                                                                    <td class="pad"> \
                                                                        <div class="alignment" align="center"> \
                                                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="55%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"> \
                                                                                <tr> \
                                                                                    <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 1px solid #575757;"><span>&#8202;</span></td> \
                                                                                </tr> \
                                                                            </table> \
                                                                        </div> \
                                                                    </td> \
                                                                </tr> \
                                                            </table> \
                                                            <div class="spacer_block block-8" style="height:25px;line-height:25px;font-size:1px;">&#8202;</div> \
                                                            <table class="paragraph_block block-9" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"> \
                                                                <tr> \
                                                                    <td class="pad" style="padding-bottom:15px;padding-top:10px;"> \
                                                                        <div class="theme-dark" style="color:#000000;direction:ltr;font-family: \'Open Sans\', \'Helvetica Neue\', Helvetica, Arial, sans-serif;font-size:14px;font-weight:300;letter-spacing:0px;line-height:150%;text-align:center;mso-line-height-alt:21px;"> \
                                                                            <p style="margin: 0;">Hi Team, We have received a inquiry from <strong> '+ formData.get('name').toString() +' </strong>.<br>The details of the user are as follows:</p>  \
                                                                        </div> \
                                                                    </td> \
                                                                </tr> \
                                                            </table> \
                                                            <table class="heading_block block-10" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">  \
                                                                <tr>  \
                                                                    <td class="pad" style="padding-top:10px;text-align:center;width:100%;">  \
                                                                        <h1 style="margin: 0; color: #2c2b2b; direction: ltr; font-family: \'Montserrat\', \'Trebuchet MS\', \'Lucida Grande\', \'Lucida Sans Unicode\', \'Lucida Sans\', Tahoma, sans-serif; font-size: 20px; font-weight: 700; letter-spacing: normal; line-height: 100%; text-align: center; margin-top: 0; margin-bottom: 0; mso-line-height-alt: 57px;"><span class="tinyMce-placeholder">CLIENT DETAILS</span></h1>  \
                                                                    </td>  \
                                                                </tr>  \
                                                            </table>  \
                                                            <table class="data_block block-11" style="padding: 20px 80px; margin: 0 auto;" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">  \
                                                                <tr style="justify-content: center; margin: 0 auto; max-width: 80%;">  \
                                                                    <td style="width:40%; font-size:14px; line-height:30px; font-family: \'Open Sans\', \'Helvetica Neue\', Helvetica, Arial, sans-serif;"> Name </td> \
                                                                    <td style="width:10%; text-align: center;"> : </td>  \
                                                                    <td style="width:40%; font-size:14px; line-height:30px; font-weight:600; color: #000;"> '+ formData.get('name').toString() +' </td>  \
                                                                </tr>  \
                                                                <tr style="justify-content: center; margin: 0 auto; max-width: 80%;">  \
                                                                    <td style="width:40%; font-size:14px; line-height:30px; font-family: \'Open Sans\', \'Helvetica Neue\', Helvetica, Arial, sans-serif;"> Email </td> \
                                                                    <td style="width:10%; text-align: center;"> : </td> \
                                                                    <td style="width:40%; font-size:14px; line-height:30px; font-weight:600; color: #000;"> '+ formData.get('email').toString() +' </td> \
                                                                </tr> \
                                                                <tr style="justify-content: center; margin: 0 auto; max-width: 80%;"> \
                                                                    <td style="width:40%; font-size:14px; line-height:30px; font-family: \'Open Sans\', \'Helvetica Neue\', Helvetica, Arial, sans-serif;"> Contact Number </td> \
                                                                    <td style="width:10%; text-align: center;"> : </td> \
                                                                    <td style="width:40%; font-size:14px; line-height:30px; font-weight:600; color: #000;"> '+ formData.get('number').toString() +' </td> \
                                                                </tr> \
                                                                <tr style="justify-content: center; margin: 0 auto; max-width: 80%;"> \
                                                                    <td style="width:40%; font-size:14px; line-height:30px; font-family: \'Open Sans\', \'Helvetica Neue\', Helvetica, Arial, sans-serif;"> Message  </td> \
                                                                    <td style="width:10%; text-align: center;"> : </td> \
                                                                    <td style="width:40%; font-size:14px; line-height:30px; font-weight:600; color: #000;"> '+ formData.get('message').toString() +' </td> \
                                                                </tr> \
                                                            </table> \
                                                            <div class="spacer_block block-12" style="height:165px;line-height:165px;font-size:1px;">&#8202;</div> \ \
                                                        </td> \
                                                    </tr> \
                                                </tbody> \
                                            </table> \
                                        </td> \
                                    </tr> \
                                </tbody> \
                            </table> \
                            <table class="row row-2" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"> \
                                <tbody> \
                                    <tr> \
                                        <td> \
                                            <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #dfffae; border-radius: 0; color: #000000; width: 680px; margin: 0 auto;" width="680"> \
                                                <tbody> \
                                                    <tr> \
                                                        <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"> \
                                                            <table class="divider_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"> \
                                                                <tr> \
                                                                    <td class="pad" style="padding-bottom:10px;"> \
                                                                        <div class="alignment" align="center"> \
                                                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"> \
                                                                                <tr> \
                                                                                    <td class="divider_inner theme-dark" style="font-size: 1px; line-height: 1px; border-top: 1px solid #000000;"><span>&#8202;</span></td> \
                                                                                </tr> \
                                                                            </table> \
                                                                        </div> \
                                                                    </td> \
                                                                </tr> \
                                                            </table> \
                                                        </td> \
                                                    </tr> \
                                                </tbody> \
                                            </table> \
                                        </td> \
                                    </tr> \
                                </tbody> \
                            </table> \
                            <table class="row row-3" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"> \
                                <tbody> \
                                    <tr> \
                                        <td> \
                                            <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #dfffae; border-radius: 0; color: #000000; width: 680px; margin: 0 auto;" width="680"> \
                                                <tbody> \
                                                    <tr> \
                                                        <td class="column column-1" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; padding-top: 10px; vertical-align: middle; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"> \
                                                            <table class="text_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"> \
                                                                <tr> \
                                                                    <td class="pad" style="padding-bottom:5px;padding-left:10px;padding-right:10px;padding-top:5px;"> \
                                                                        <div style="font-family: \'Trebuchet MS\', Tahoma, sans-serif"> \
                                                                            <div class="" style="font-size: 12px; font-family: \'Montserrat\', \'Trebuchet MS\', \'Lucida Grande\', \'Lucida Sans Unicode\', \'Lucida Sans\', Tahoma, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #ffffff; line-height: 1.2;"> \
                                                                                <p style="margin: 0; font-size: 18px; text-align: left; mso-line-height-alt: 21.599999999999998px;"><strong><span style="font-size:14px;color:#000000;"><span style="">Social media</span></span></strong></p> \
                                                                            </div> \
                                                                        </div> \
                                                                    </td> \
                                                                </tr> \
                                                            </table> \
                                                            <table class="text_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"> \
                                                                <tr> \
                                                                    <td class="pad" style="padding-bottom:10px;padding-left:10px;padding-right:20px;padding-top:10px;"> \
                                                                        <div style="font-family: Arial, sans-serif"> \
                                                                            <div class="" style="font-size: 12px; font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #C0C0C0; line-height: 1.2;"> \
                                                                                <p style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 16.8px;"><span style="color:#454545;font-size:12px;">Stay up-to-date with current activities by following us on your favorite social media channels.</span></p> \
                                                                            </div> \
                                                                        </div> \
                                                                    </td> \
                                                                </tr> \
                                                            </table> \
                                                            <table class="social_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"> \
                                                                <tr> \
                                                                    <td class="pad" style="text-align:left;padding-right:0px;padding-left:0px;"> \
                                                                        <div class="alignment" align="left"> \
                                                                            <table class="social-table" width="144px" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block;"> \
                                                                                <tr> \
                                                                                    <td style="padding:0 4px 0 0;"><a href="https://www.facebook.com/aaesthetic" target="_blank"><img src="https://adconstruction.org.in/assets/images/mail/facebook-icon.png" width="32" height="32" alt="Facebook" title="Facebook" style="display: block; height: auto; border: 0;"></a></td> \
                                                                                    <td style="padding:0 4px 0 0;"><a href="https://www.instagram.com/__aesthetic_designs__/" target="_blank"><img src="https://adconstruction.org.in/assets/images/mail/instagram-icon.png" width="32" height="32" alt="Instagram" title="Instagram" style="display: block; height: auto; border: 0;"></a></td> \
                                                                                    <td style="padding:0 4px 0 0;"><a href="https://www.linkedin.com/company/aesthetic-dsgnz" target="_blank"><img src="https://adconstruction.org.in/assets/images/mail/linkedin-icon.png" width="32" height="32" alt="LinkedIn" title="LinkedIn" style="display: block; height: auto; border: 0;"></a></td> \
                                                                                    <td style="padding:0 4px 0 0;"><a href="https://www.youtube.com/@aesthetic_dsgnz" target="_blank"><img src="https://adconstruction.org.in/assets/images/mail/youtube-icon.png" width="32" height="32" alt="Youtube" title="Youtube" style="display: block; height: auto; border: 0;"></a></td> \
                                                                                </tr> \
                                                                            </table> \
                                                                        </div> \
                                                                    </td> \
                                                                </tr> \
                                                            </table> \
                                                        </td> \
                                                        <td class="column column-2" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; padding-top: 10px; vertical-align: middle; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"> \
                                                            <table class="text_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"> \
                                                                <tr> \
                                                                    <td class="pad" style="padding-bottom:5px;padding-left:10px;padding-right:10px;padding-top:5px;"> \
                                                                        <div style="font-family: \'Trebuchet MS\', Tahoma, sans-serif"> \
                                                                            <div class="" style="font-size: 12px; font-family: \'Montserrat\', \'Trebuchet MS\', \'Lucida Grande\', \'Lucida Sans Unicode\', \'Lucida Sans\', Tahoma, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #ffffff; line-height: 1.2;"> \
                                                                                <p style="margin: 0; font-size: 18px; text-align: left; mso-line-height-alt: 21.599999999999998px;"><span style="font-size:14px;color:#000000;"><strong><span style="">Where to find us</span></strong></span></p> \
                                                                            </div> \
                                                                        </div> \
                                                                    </td> \
                                                                </tr> \
                                                            </table> \
                                                            <table class="text_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"> \
                                                                <tr> \
                                                                    <td class="pad" style="padding-bottom:5px;padding-left:10px;padding-right:10px;padding-top:10px;"> \
                                                                        <div style="font-family: Arial, sans-serif"> \
                                                                            <div class="" style="font-size: 12px; font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #3f3f3f; line-height: 1.2;"> \
                                                                                <a href="https://maps.app.goo.gl/dwiTQF4N6cwkTu9N6" target="_blank" style="text-decoration:none;"> \
                                                                                    <p style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 16.8px;"><span style="color:#454545;font-size:12px;">Plot No.88, Ground Floor,<br>Kingsland Street, VGN Brent Park,<br>Ambattur, Chennai, <br>Tamilnadu - 600058</span></p> \
                                                                                </a> \
                                                                            </div> \
                                                                        </div> \
                                                                    </td> \
                                                                </tr> \
                                                            </table> \
                                                        </td> \
                                                    </tr> \
                                                </tbody> \
                                            </table> \
                                        </td> \
                                    </tr> \
                                </tbody> \
                            </table> \
                        </td> \
                    </tr> \
                </tbody> \
            </table><!-- End --> \
        </body> \
        \
        </html>';

        const mailData = {
            user: {
                recipient_email : [ formData.get('email').toString() ],
                sender_email : "info@adconstruction.org.in",
                subject : "Thanks for Contacting AD Construction!",
                body : msg
            },
            org: {
                recipient_email : [ "info@adconstruction.org.in", "aesthetic.dsgnz@gmail.com" ],
                sender_email : "info@adconstruction.org.in",
                subject : "AD Construction - New Contact Request",
                body : msg2
            }

        };
    
        email_form_submit(thisForm, mailData.user);
        email_form_submit(thisForm, mailData.org);
        
        });
    });
    
    function email_form_submit(thisForm , user) {
        Email.send({
            SecureToken : "7b020b27-3cac-44c2-a751-ef7d7812be36",
            To : user.recipient_email,
            From : user.sender_email,
            Subject : user.subject,
            Body : user.body
        }).then((function (response) {
            // thisForm.querySelector('.loading').classList.remove('d-block');
            if (response == "OK")
            {
                $('.success-message').addClass('active');
                setTimeout(() => {
                    $('.success-message').removeClass("active");
                }, 7000)
            }
            else
            {   
                $('.error-message h6').html(response);
                $('.error-message').addClass('active');
                setTimeout(() => {
                    $('.error-message').removeClass("active");
                }, 7000)
            }
        }));
    }  
}