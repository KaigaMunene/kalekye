const Terms = () => {
  return (
    <section className="container mx-auto px-4 py-8 text-gray-700 min-h-screen font-forum pt-20">
      <h1 className="text-3xl font-bold my-4">Own Your Mic Program Terms and Conditions</h1>
      <p>
        The Own Your Mic Program is a coaching program designed to enhance podcast hosting, public
        speaking, and voiceover skills. Each participant is eligible to a certificate of completion
        upon finishing the entire selected course.{' '}
      </p>
      <p className="mb-2">
        Welcome to Own Your Mic. By enrolling, you agree to the following terms:
      </p>
      <h2 className="font-bold">1. Eligibility</h2>
      <ul className="list-disc list-inside mb-4">
        <li>The program is open to individuals aged 18 and above.</li>
        <li>
          Participants must complete the registration process by midnight(00:00hrs) of the closing
          registration date.
        </li>
        <li>
          All information provide must be valid and accurate ahead of registration closing date.
        </li>
      </ul>
      <h2 className="font-bold">2. Fees and Payment</h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          Program fees must be paid in full prior to the start date according to each program&apos;s
          set deadline
        </li>
        <li>
          Alternatively, participants may opt for the two-installment payment plan, with the first
          installment due before the start date and the second installment payable{' '}
          <span className="font-bold">before the second half of the program,</span> as outlined in
          the registration form.
        </li>
        <li>
          Participants who choose the installment payment plan are required to sign a legally
          binding agreement to ensure compliance with the payment terms. The second installment must
          be paid as stipulated to complete the course.
        </li>
        <li>All payments are non-refundable, except as specified in the refund policy.</li>
      </ul>
      <h2 className="font-bold">3. Program Access</h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          Participants will gain access to course materials via the designated online platform.
        </li>
        <li>
          Access to program resources is limited to the enrolled participant and cannot be shared.
        </li>
      </ul>
      <h2 className="font-bold">4. Intellectual Property</h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          All program materials, including videos, worksheets, and presentations, are the
          intellectual property of KM Network.
        </li>
        <li>Materials are for personal use only and cannot be copied, distributed, or resold.</li>
      </ul>
      <h2 className="font-bold">5. Participation and Scheduling</h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          Participants are expected to attend all scheduled classes as per the program timetable
          actively engage in all sessions and complete assignments on time. Participants are
          expected to attend all scheduled sessions and complete assignments on time.
        </li>
        <li>
          It is the responsibility of every participant to take notes in each class. No notes will
          be provided for any of the courses.
        </li>
        <li>
          Disrespectful behavior towards facilitators or other participants will not be tolerated
          and may result in removal from the program.
        </li>
        <h3 className="font-bold">Makeup Classes</h3>
        <ul className="list-disc list-inside">
          <li>Makeup classes are not included in the program fee.</li>
          <li>
            If a participant misses a class, they may request a makeup session. Makeup classes will
            only be scheduled based on the coach&apos;s availability.
          </li>
          <li>
            An extra fee of Kshs. 2,500/- per makeup class will apply, which must be paid in advance
            to confirm the session
          </li>
        </ul>
      </ul>
      <h2 className="font-bold">6. Refund Policy</h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          Participants are eligible for a refund of 25% of the total amount paid if a written
          request is submitted at least 48 hours BEFORE the start of classes and prior to accessing
          any program materials
        </li>
        <li>No refunds will be issued after the program start date.</li>
      </ul>
      <h2 className="font-bold">7. Liability</h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          KM Network is not responsible for any personal injury, loss, or damage resulting from
          participation in the program.
        </li>
        <li>Participants are responsible for their own equipment and internet connectivity.</li>
      </ul>
      <h2 className="font-bold"> 9. Data Protection </h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          KM Network collects personal data for the purpose of program delivery. All information is
          handled in accordance with our Privacy Policy.
        </li>
      </ul>
      <h2 className="font-bold"> 10. Amendments</h2>
      <ul>
        <li>
          KM Network reserves the right to update these terms and conditions at any time.
          Participants will be notified of significant changes.
        </li>
      </ul>
      <h2 className="font-bold mt-4"> Contact Information</h2>
      <p>
        For any questions or concerns regarding the Own Your Mic Program, please contact us at{' '}
        <a href="mailto:info@kalekyemumo.com" className="text-blue-500">
          info@kalekyemumo.com
        </a>
        s
      </p>

      <p className="text-sm text-gray-600">
        Last updated: {new Date().getFullYear()} &copy; Kalekye Mumo. All rights reserved.
      </p>
    </section>
  );
};

export default Terms;
