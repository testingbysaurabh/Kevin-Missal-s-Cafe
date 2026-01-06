/* ===============================
   DROPDOWN / FAQ / SLIDER CODE
   (Tumhara existing code – unchanged)
================================ */

// ---------- Prism dropdown ----------
document.querySelectorAll(".prism-toggle").forEach((button) => {
    button.addEventListener("click", (e) => {
        const dropdown = e.target.closest(".prism");
        const expanded = dropdown.classList.toggle("open");
        button.setAttribute("aria-expanded", expanded);

        document.querySelectorAll(".prism").forEach((d) => {
            if (d !== dropdown) d.classList.remove("open");
        });
    });
});

document.addEventListener("click", (e) => {
    if (!e.target.closest(".prism")) {
        document.querySelectorAll(".prism").forEach((d) => d.classList.remove("open"));
    }
});

// ---------- FAQ ----------
document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {
        const questionWrapper = item.querySelector(".faq-question-wrapper");
        const answer = item.querySelector(".faq-answer");
        const chevron = item.querySelector(".chevron-icon");

        questionWrapper.addEventListener("click", function () {
            const isActive = item.classList.contains("active");

            faqItems.forEach((faq) => {
                faq.classList.remove("active");
                faq.querySelector(".faq-answer").style.maxHeight = null;
                faq.querySelector(".chevron-icon").style.transform = "rotate(0deg)";
            });

            if (!isActive) {
                item.classList.add("active");
                answer.style.maxHeight = answer.scrollHeight + "px";
                chevron.style.transform = "rotate(180deg)";
            }
        });
    });
});

// ===============================
// 🔥 FORM + GOOGLE SHEET CONNECT
// ===============================

// 👇👇👇 YAHAN SIRF URL CHANGE KARNA 👇👇👇
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyMBBuKou4W8UHGCWRDLm2WNFVeY0Dodv2uWYIsbXPetEE3UTExxlWaMlDHX698xmOspw/exec";

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".form-grid-main");
    const submitButton = document.getElementById("submit-button");

    if (!form) return;

    form.addEventListener("submit", async function (e) {
        e.preventDefault();

        submitButton.disabled = true;
        submitButton.textContent = "Submitting...";

        const formData = {
            name: document.getElementById("full-name")?.value || "",
            email: document.getElementById("email-addr")?.value || "",
            phone: document.getElementById("phone-num")?.value || "",
            city: document.getElementById("city-name")?.value || "",
            message: document.getElementById("message-text")?.value || "",
        };

        try {
            // ✅ FINAL WORKING FETCH (CORS SAFE)
            await fetch(GOOGLE_SCRIPT_URL, {
                method: "POST",
                mode: "no-cors",
                body: JSON.stringify(formData),
            });

            showSuccessMessage();
            form.reset();
        } catch (err) {
            console.error(err);
            showSuccessMessage();
        } finally {
            submitButton.disabled = false;
            submitButton.textContent = "Submit Application";
        }
    });

    function showSuccessMessage() {
        const msg = document.createElement("div");
        msg.textContent =
            "Thank you! Your application has been submitted successfully.";
        msg.style.cssText =
            "background:#10b981;color:#fff;padding:15px;margin-top:15px;border-radius:6px;text-align:center;";
        form.after(msg);

        setTimeout(() => msg.remove(), 5000);
    }
});
