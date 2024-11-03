<script setup>
  import PHPForm from '../utils/PHPForm.vue';
</script>

<template>
        <section class="page-section" id="contact">
            <div class="container">
                <!-- Contact Section Heading-->
                <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0"><span class = "Section_3_Title"></span></h2>
                <!-- Icon Divider-->
                <div class="divider-custom">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"/></svg></div>
                    <div class="divider-custom-line"></div>
                </div>
                <!-- Contact Section Form-->
                <div class="row justify-content-center">
                    <div class="col-lg-8 col-xl-7">
                       <div class="container">
                        <div class="row">
                            <PHPForm role="form" id="contact-form" class="contact-form" action="/assets/php/home/contact.php" @formResponse="response" :model = "form">
                            <div class="row">
                                    <div class="col-md-6">
                                      <div class="form-group">
                                        <input type="text" class="form-control" name="Name" autocomplete="off" id="Name" placeholder="input_name" required v-model = "form.name">
                                      </div>
                                  </div>
                                  <span class = "d-sm-none"><br></span>
                                    <div class="col-md-6">
                                      <div class="form-group">
                                        <input type="email" class="form-control" name="email" autocomplete="off" id="email" placeholder="E-mail" required v-model = "form.mail">
                                      </div>
                                  </div>
                                  <br>
                                  <br>
                                  <br>
                                  </div>
                                  <div class="row">
                                      <div class="col-md-12">
                                      <div class="form-group">
                                        <textarea class="form-control textarea" rows="3" name="Message" id="Message" placeholder="input_message" maxlength = "2500" required v-model = "form.message"></textarea>
                                      </div>
                                  </div>
                                </div>
                                <br>
                                <div class="row">
                                <div class="col-md-12">
                              <button type="submit" class="btn main-btn pull-right"><span class = "send_message"></span></button>
                              </div>
                              </div>
                            </PHPForm>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
</template>

<script>
export default {
  data() {
    return {
      form: {}
    }
  },
  methods: {
    response(e) {
      console.log("onResponse - " + JSON.stringify(e.data))
      if (e.success) {
        console.log("Sukces")
        if (e.data.sent) {
          console.log("Wiadomosc wyslana");
        }
      } else {
        console.log("Błąd: " + e.error)
      }
    }
  }
}

</script>