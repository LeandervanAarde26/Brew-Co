import { ContactContent } from "../../content/contact.mjs";

export const PageHeader = () => `
 
    <div class="row pt-3">
            <div class="col-12 col-lg-6 offset-lg-3 d-lg-block">
            <h1 class="text-center contact-heading">${ContactContent.heading} </h1>
            <p class="p-3 text-center mt-2 col-10 col-lg-6  offset-1 offset-lg-3 contact-body">${ContactContent.body}</p>
        </div>
    </div>
 `;

export const ContactForm = () => `
    <div class="row form-row">
        <div class="col-12 col-lg-6 offset-lg-3 form-container p-3">
            <form action="POST" action="contact.php">
                <section class="form-group ">
                    <label class="ms-5 contact-body " for="email">Email</label>
                    <br>
                    <input class="col-6 ms-5" type="email" name="email" id="email">
                </section>
                
                <section class="form-group mt-2">
                    <label class="ms-5 contact-body " for="message ">Message</label>
                    <textarea class="col-10 offset-1 ms-5" name="tArea" id="" rows="10"></textarea>
                </section>
                    <div class="submit col-12 col-lg-3 offset-lg-4 mt-2 pt-2 pb-2 text-center ">
                        <span>SUBMIT</span>
                    </div>
            </form>
        <div class="col-12 col-lg-6 offset-lg-3 form-container mt-1">
    </div>
 `;
