import { FC } from 'react'

const PrivacyPolicy: FC = () => (
  <div className="columns">
    <div className="columns__main">
      <div className="privacy">
        <h1 className="privacy__title">The Juro Privacy Policy</h1>
        <p className="privacy__textual">Hello. We are Juro Online Limited (known by humans as Juro). Here's
          how we protect your data and respect your privacy. We've open-sourced this policy - get the
          free privacy policy template.
        </p>
        {/* privacy content blocks start */}
        <div className="privacy__item" id="privacy-1"> {/*<span
            className="privacy__open-all privacy__more privacy-toggle js-open-all"><i>Open all</i>
            +</span> <span className="privacy__open-all privacy__less privacy-toggle js-close-all bs--hidden"><i>Close
              all</i> -</span>*/}
          {/* toggler content */}<input type="checkbox" className="act-checker" id="act-togle-1" />
          <div className="privacy__item-block act-smooth">
            <h2 className="privacy__item-title">
              <span className="privacy__item-icon">
                <svg className="icon icon-role">
                  <use href="/sprite.svg#icon-role"></use>
                </svg>
              </span> Our role in your privacy
            </h2>
            <div className="privacy__item-i">
              <p> If you are a Juro customer or subscriber, or just visiting our website, this
                policy applies to you. If you are agreeing a contract through Juro, you should
                check the privacy policy of the Juro customer who sent you
                the contract - but we also tell you a bit about how we process your data on
                their behalf in the “What about if I’m just signing a contract through Juro?”
                section below. </p>
            </div>
          </div>
          <div className="privacy__item-block act-slide">
            <div className="data-collect">
              <div className="data-collect__item">
                <div>
                  <div>
                    <h3 className="data-collect__title">Our responsibilities</h3>
                  </div>
                  <p> If you are a registered Juro customer or a visitor to our website we act
                    as the <a href="https://ico.org.uk/for-organisations/guide-to-data-protection/key-definitions/"
                      target="_blank" rel="noreferrer">‘data controller’</a> of personal data. This means
                    we determine how and why your data are processed. We are registered as a
                    data controller at the UK Information Commissioner’s Office under number
                    <a href="https://ico.org.uk/ESDWebPages/Entry/ZA134298" target="_blank" rel="noreferrer">ZA134298.</a>
                  </p>
                  <div>
                    <h3 className="data-collect__title">Your responsibilities</h3>
                    <ul>
                      <li>Read this Privacy Policy</li>
                      <li>If you are our customer, please also check the contracts between
                        us: they may contain further details on how we collect and
                        process your data.</li>
                      <li>If you provide us with personal information about other people,
                        or if others give us your information, we will only use that
                        information for the specific reason for which it was provided to
                        us. By submitting
                        the information, you confirm that you have the right to
                        authorise us to process it on your behalf in accordance with
                        this Privacy Policy.</li>
                    </ul>
                  </div>
                  <div className="highlight-box bs--mt-15">
                    <h3 className="data-collect__title">What about if I’m just signing a
                      contract through Juro?</h3>
                    <p> If you are on the other side of a contract processed through Juro,
                      but are not a registered user, we act as the <a
                        href="https://ico.org.uk/for-organisations/guide-to-data-protection/key-definitions/"
                        target="_blank" rel="noreferrer">‘data processor’</a> of the Juro customer who
                      has sent you the contract: this means we only process your data to
                      help us provide our service to our customer, or in accordance with
                      our customer’s instructions, or as required
                      by law. Our customer is responsible for making sure that your
                      personal data is treated in accordance with applicable data
                      protection laws. That includes informing you how service providers
                      (like us)
                      collect and use data on their behalf. </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* labels for toggler content */}<label htmlFor="act-togle-1" className="privacy-toggle privacy__less"><i>Read
              less</i> x</label> <label htmlFor="act-togle-1" className="privacy-toggle privacy__more"><i>Read more</i>
            {'>'}</label>
        </div>
        <div className="privacy__item" id="privacy-2">
          <div className="privacy__item-block">
            <h2 className="privacy__item-title"><span className="privacy__item-icon">
                <svg className="icon icon-datacollection">
                  <use href="/sprite.svg#icon-datacollection"></use>
                </svg>
              </span>When and how we collect data</h2>
            <div className="privacy__item-i">
              <p> From the first moment you interact with Juro, we are collecting data. Sometimes
                you provide us with data, sometimes data about you is collected automatically.
              </p>
              <p>Here’s when and how we do this:</p>
              <div className="data-scheme">
                <div className="data-scheme__top">
                  <div className="data-scheme__top-left"> <svg className="icon icon-data-you">
                      <use href="/sprite.svg#icon-data-you"></use>
                    </svg>
                    <p>DATA YOU GIVE</p>
                  </div>
                  <div className="data-scheme__top-right"> <svg className="icon icon-data-we">
                      <use href="/sprite.svg#icon-data-we"></use>
                    </svg>
                    <p>DATA WE COLLECT</p>
                  </div>
                </div>
                <div className="data-scheme__wrap">
                  <div className="data-scheme__list">
                    <p className="data-scheme__item bull-blue">You browse any page of our
                      website
                    </p>
                    <p className="data-scheme__item bull-blue bull-green">You request a demo of
                      Juro
                    </p>
                    <p className="data-scheme__item bull-green">We call you</p>
                    <p className="data-scheme__item bull-green bull-blue">You use Juro</p>
                    <p className="data-scheme__item bull-blue">You receive emails from us</p>
                    <p className="data-scheme__item bull-blue bull-green">You view and sign
                      contracts
                    </p>
                    <p className="data-scheme__item bull-blue bull-green">You chat with us for
                      customer support</p>
                    <p className="data-scheme__item bull-blue bull-green">You connect
                      integrations (like Slack)</p>
                    <p className="data-scheme__item bull-green">You opt-in to marketing messages
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="privacy__item" id="privacy-3">
          {/* toggler content */}<input type="checkbox" className="act-checker" id="act-togle-2" />
          <div className="privacy__item-block act-smooth">
            <h2 className="privacy__item-title"><span className="privacy__item-icon">
                <svg className="icon icon-datatypes">
                  <use href="/sprite.svg#icon-datatypes"></use>
                </svg>
              </span>Types of data we collect</h2>
            <div className="privacy__item-i">
              <div className="data-collect">
                <div className="data-collect__item"> <span className="data-collect__item-icon">
                    <svg className="icon icon-contact">
                      <use href="/sprite.svg#icon-contact"></use>
                    </svg>
                  </span>
                  <div>
                    <h3 className="data-collect__title">Contact details</h3>
                    <p>Your name, address, telephone number, email address...</p>
                  </div>
                </div>
                <div className="data-collect__item"> <span className="data-collect__item-icon">
                    <svg className="icon icon-payments">
                      <use href="/sprite.svg#icon-payments"></use>
                    </svg>
                  </span>
                  <div>
                    <h3 className="data-collect__title"> Financial information </h3>
                    <p>Your bank account number, sort code, credit/debit card details...</p>
                  </div>
                </div>
                <div className="data-collect__item"> <span className="data-collect__item-icon">
                    <svg className="icon icon-contractdata">
                      <use href="/sprite.svg#icon-contractdata"></use>
                    </svg>
                  </span>
                  <div>
                    <h3 className="data-collect__title">Data from your contracts</h3>
                    <p>Your contract templates, smart fields, data integrated into contracts
                      from third party providers, counterparty names and email addresses,
                      comments, activity on contracts, signatures...
                    </p>
                  </div>
                </div>
                <div className="data-collect__item"> <span className="data-collect__item-icon">
                    <svg className="icon icon-IDdata">
                      <use href="/sprite.svg#icon-IDdata"></use>
                    </svg>
                  </span>
                  <div>
                    <h3 className="data-collect__title">Data that identifies you</h3>
                    <p>Your IP address, login information, browser type and version, time
                      zone setting, browser plug-in types, geolocation information about
                      where you might be, operating system and version...
                    </p>
                  </div>
                </div>
                <div className="data-collect__item"> <span className="data-collect__item-icon">
                    <svg className="icon icon-usage">
                      <use href="/sprite.svg#icon-usage"></use>
                    </svg>
                  </span>
                  <div>
                    <h3 className="data-collect__title">Data on how you use Juro</h3>
                    <p> Your URL clickstreams (the path you take through our site),
                      products/services viewed, page response times, download errors, how
                      long you stay on our pages, what you do on those pages, how often,
                      and other
                      actions... </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="privacy__item-block act-slide">
            <div className="privacy__item-i">
              <div className="data-collect">
                <div className="data-collect__item"> <span className="data-collect__item-icon">
                    <svg className="icon icon-sensitivedata">
                      <use href="/sprite.svg#icon-sensitivedata"></use>
                    </svg>
                  </span>
                  <div>
                    <h3 className="data-collect__title">What about really sensitive data?</h3>
                    <p>We don’t collect any "sensitive data" about you (like racial or
                      ethnic origin, political opinions, religious/philosophical beliefs,
                      trade union membership, genetic data, biometric data, health data,
                      data
                      about your sexual life or orientation, and offences or alleged
                      offences) except when we have your specific consent, or when we have
                      to to comply with the law.</p>
                  </div>
                </div>
                <div className="data-collect__item"> <span className="data-collect__item-icon">
                    <svg className="icon icon-childrendata">
                      <use href="/sprite.svg#icon-childrendata"></use>
                    </svg>
                  </span>
                  <div>
                    <h3 className="data-collect__title">What about children’s data?</h3>
                    <p>Juro is a business-to-business service directed to and intended for
                      use only by those who are 18 years of age or over. We do not target
                      Juro at children, and we do not knowingly collect any personal data
                      from any person under 16 years of age.</p>
                  </div>
                </div>
              </div>
            </div>
          </div> <label htmlFor="act-togle-2" className="privacy-toggle privacy__less"><i>Read less</i>
            x</label> <label htmlFor="act-togle-2" className="privacy-toggle privacy__more"><i>Read more</i>
            {'>'}</label>
        </div>
        <div className="privacy__item" id="privacy-4">
          {/* toggler content */}<input type="checkbox" className="act-checker" id="act-togle-4" />
          <div className="privacy__item-block act-smooth">
            <h2 className="privacy__item-title"> <span className="privacy__item-icon">
                <svg className="icon icon-datause">
                  <use href="/sprite.svg#icon-datause"></use>
                </svg>
              </span>How and why we use your data</h2>
            <div className="privacy__item-i">
              <p>Data protection law means that we can only use your data for certain reasons and
                where we have a legal basis to do so. Here are the reasons for which we process
                your data:</p>
              <div className="data-collect">
                <div className="data-collect__item">
                  <div>
                    <h3 className="data-collect__title">Keeping Juro running</h3>
                    <p>Managing your requests (like inviting users, sending a contract to
                      sign to a counterparty, connecting your Juro account to other
                      services), login and authentication, remembering your settings,
                      processing
                      payments, hosting and back-end infrastructure.</p>
                    <p className="data-collect__tags">Legal basis: <span className="js-tags"
                        data-anchor="tag-contract">contract</span><span className="js-tags"
                        data-anchor="tag-legitimate">legitimate interests</span></p>
                  </div>
                </div>
                <div className="data-collect__item">
                  <div>
                    <h3 className="data-collect__title">Improving Juro</h3>
                    <p>Testing features, interacting with feedback platforms and
                      questionnaires, managing landing pages, heat mapping our site,
                      traffic optimization and data analysis and research, including
                      profiling and the use
                      of machine learning and other techniques over your data and in some
                      cases using third parties to do this.</p>
                    <p className="data-collect__tags">Legal basis for this data usage: <span className="js-tags"
                        data-anchor="tag-contract">contract</span><span className="js-tags"
                        data-anchor="tag-legitimate">legitimate
                        interests</span></p>
                  </div>
                </div>
                <div className="data-collect__item">
                  <div>
                    <h3 className="data-collect__title">Customer support</h3>
                    <p>Notifying you of any changes to our service, solving issues via live
                      chat support, phone or email including any bug fixing.</p>
                    <p className="data-collect__tags">Legal basis for this data usage: <span className="js-tags"
                        data-anchor="tag-contract">contract</span></p>
                  </div>
                </div>
                <div className="data-collect__item">
                  <div>
                    <h3 className="data-collect__title">Marketing purposes (with your consent)
                    </h3>
                    <p>Sending you emails and messages about new features, products and
                      services, and content.</p>
                    <p className="data-collect__tags">Legal basis for this data usage: <span className="js-tags"
                        data-anchor="tag-consent">consent</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="privacy__item-block act-slide">
            <div className="data-collect">
              <div className="data-collect__item">
                <div>
                  <h3 className="data-collect__title">Here is what each of these "legal bases"
                    mean:
                  </h3>
                </div>
              </div>
              <div className="data-collect__item">
                <div>
                  <h3 className="data-collect__title">Consent</h3>
                  <p>You have given clear consent for you to process your personal data for a
                    specific purpose.</p>
                  <div className="highlight-box">
                    <h3 className="data-collect__title">You can change your mind!</h3>
                    <p>If you have previously given consent to our processing your data you
                      can freely withdraw such consent at any time. You can do this by
                      emailing us at <a href="mailt:support@juro.com">support@juro.com</a>.</p>
                    <p> If you do withdraw your consent, and if we do not have another legal
                      basis for processing your information, then we will stop processing
                      your personal data. If we do have another legal basis for processing
                      your information, then we may continue to do so subject to your
                      legal rights. </p>
                  </div>
                </div>
              </div>
              <div className="data-collect__item" id="tag-contract">
                <div>
                  <h3 className="data-collect__title">Contract</h3>
                  <p>Processing your data is necessary for a contract you have with us, or
                    because we have asked you to take specific steps before entering into
                    that contract.</p>
                </div>
              </div>
              <div className="data-collect__item" id="tag-legitimate">
                <div>
                  <h3 className="data-collect__title">Legitimate interests</h3>
                  <p className="bs--no-mb"> Processing your data is necessary for our legitimate
                    interests or the legitimate interests of a third party, provided those
                    interests are not outweighed by your rights and interests. These
                    legitimate interests
                    are: </p>
                  <ul className="bs--mb-10 bs--mt-10">
                    <li> gaining insights from your behaviour on our website or in our app
                    </li>
                    <li> delivering, developing and improving the Juro service </li>
                    <li> enabling us to enhance, customise or modify our services and comms
                    </li>
                    <li> determining whether marketing campaigns are effective </li>
                    <li> enhancing data security </li>
                  </ul>
                  <p> In each case, these legitimate interests are only valid if they are not
                    outweighed by your rights and interests </p>
                </div>
              </div>
            </div>
          </div> <label htmlFor="act-togle-4" className="privacy-toggle privacy__less"><i>Read less</i>
            x</label> <label htmlFor="act-togle-4" className="privacy-toggle privacy__more"><i>Read more</i>
            {'>'}</label>
        </div>
        <div className="privacy__item" id="privacy-5">
          <div className="privacy__item-block">
            <h2 className="privacy__item-title"> <span className="privacy__item-icon">
                <svg className="icon icon-rights">
                  <use href="/sprite.svg#icon-rights"></use>
                </svg>
              </span>Your privacy choices and rights</h2>
            <div className="privacy__item-i">
              <div className="data-collect">
                <div className="data-collect__item">
                  <div>
                    <h3 className="data-collect__title">Your choices</h3>
                  </div>
                </div>
                <div className="data-collect__item"> <span className="data-collect__item-icon">
                    <svg className="icon icon-nodata">
                      <use href="/sprite.svg#icon-nodata"></use>
                    </svg>
                  </span>
                  <div>
                    <h3 className="data-collect__title"> You can choose not to provide us with
                      personal data </h3>
                    <p> If you choose to do this, you can continue to use the website and
                      browse its pages, but we will not be able to process transactions
                      without personal data. </p>
                  </div>
                </div>
                <div className="data-collect__item"> <span className="data-collect__item-icon">
                    <svg className="icon icon-nocookie">
                      <use href="/sprite.svg#icon-nocookie"></use>
                    </svg>
                  </span>
                  <div>
                    <h3 className="data-collect__title">You can turn off cookies in your browser
                      by changing its settings
                    </h3>
                    <p> You can block cookies by activating a setting on your browser
                      allowing you to refuse cookies. You can also delete cookies through
                      your browser settings. If you turn off cookies, you can continue to
                      use the
                      website and browse its pages, but Juro and certain services (like
                      Intercom) will not work effectively. </p>
                  </div>
                </div>
                <div className="data-collect__item"> <span className="data-collect__item-icon">
                    <svg className="icon icon-no_mktg">
                      <use href="/sprite.svg#icon-no_mktg"></use>
                    </svg>
                  </span>
                  <div>
                    <h3 className="data-collect__title">You can ask us not to use your data for
                      marketing
                    </h3>
                    <p>We will inform you (before collecting your data) if we intend to use
                      your data for marketing and if third parties are involved. You can
                      opt out from marketing by emailing us at <a
                        href="mailto:support@juro.com">support@juro.com</a>.</p>
                  </div>
                </div>
                <div className="data-collect__item">
                  <div>
                    <h3 className="data-collect__title">Your rights</h3>
                    <p>You can exercise your rights by sending us an email at <a
                        href="mailto:support@juro.com">support@juro.com</a>.</p>
                  </div>
                </div>
                <div className="data-collect__item"> <span className="data-collect__item-icon">
                    <svg className="icon icon-access">
                      <use href="/sprite.svg#icon-access"></use>
                    </svg>
                  </span>
                  <div>
                    <h3 className="data-collect__title">You have the right to access information
                      we hold about you</h3>
                    <p>This includes the right to ask us supplementary information about:
                    </p>
                    <ul className="bs--mb-10">
                      <li>the categories of data we’re processing</li>
                      <li>the purposes of data processing</li>
                      <li>the categories of third parties to whom the data may be
                        disclosed
                      </li>
                      <li>how long the data will be stored (or the criteria used to
                        determine that period)</li>
                      <li>your other rights regarding our use of your data</li>
                    </ul>
                    <p> We will provide you with the information within one month of your
                      request, unless doing so would adversely affect the rights and
                      freedoms of other (e.g. another person’s confidentiality or
                      intellectual property
                      rights). We’ll tell you if we can’t meet your request for that
                      reason. </p>
                  </div>
                </div>
                <div className="data-collect__item"> <span className="data-collect__item-icon">
                    <svg className="icon icon-correct">
                      <use href="/sprite.svg#icon-correct"></use>
                    </svg>
                  </span>
                  <div>
                    <h3 className="data-collect__title">You have the right to make us correct
                      any inaccurate personal data about you</h3>
                  </div>
                </div>
                <div className="data-collect__item"> <span className="data-collect__item-icon">
                    <svg className="icon icon-noprofile">
                      <use href="/sprite.svg#icon-noprofile"></use>
                    </svg>
                  </span>
                  <div>
                    <h3 className="data-collect__title">You can object to us using your data for
                      profiling you or making automated decisions about you</h3>
                    <p>We may use your data to determine whether we should let you know
                      information that might be relevant to you (for example, tailoring
                      emails to you based on your behaviour). Otherwise, the only
                      circumstances
                      in which we will do this is to provide the Juro service to you.</p>
                  </div>
                </div>
                <div className="data-collect__item"> <span className="data-collect__item-icon">
                    <svg className="icon icon-port">
                      <use href="/sprite.svg#icon-port"></use>
                    </svg>
                  </span>
                  <div>
                    <h3 className="data-collect__title">You have the right to port your data to
                      another service</h3>
                    <p>We will give you a copy of your data in CSV or JSON so that you can
                      provide it to another service. If you ask us and it is technically
                      possible, we will directly transfer the data to the other service
                      for
                      you. We will not do so to the extent that this involves disclosing
                      data about any other individual.
                    </p>
                  </div>
                </div>
                <div className="data-collect__item"> <span className="data-collect__item-icon">
                    <svg className="icon icon-forget">
                      <use href="/sprite.svg#icon-forget"></use>
                    </svg>
                  </span>
                  <div>
                    <h3 className="data-collect__title">You have the right to be ‘forgotten’ by
                      us
                    </h3>
                    <p>You can do this by asking us to erase any personal data we hold about
                      you, if it is no longer necessary for us to hold the data for
                      purposes of your use of Juro.</p>
                  </div>
                </div>
                <div className="data-collect__item"> <span className="data-collect__item-icon">
                    <svg className="icon icon-complaint">
                      <use href="/sprite.svg#icon-complaint"></use>
                    </svg>
                  </span>
                  <div>
                    <h3 className="data-collect__title">You have the right to lodge a complaint
                      regarding our use of your data</h3>
                    <p> Please tell us first, so we have a chance to address your concerns.
                      If we fail in this, you can address any complaint to the UK
                      Information Commissioner’s Office, either by calling their
                      <a href="https://ico.org.uk/global/contact-us/helpline/">helpline</a>
                      or as directed on their website at <a href="http://www.ico.org.uk/">www.ico.org.uk.</a>
                    </p>
                  </div>
                </div>
                <div className="data-collect__item highlight-box">
                  <div>
                    <h3 className="data-collect__title">On the other side of a contract? You
                      have rights too!</h3>
                    <p>If you have signed a contract through Juro and you wish to exercise
                      your rights, please contact the relevant Juro user. If you prefer,
                      you can contact us at <a href="mailto:support@juro.com">support@juro.com</a>,
                      and we will pass the request on to our user (please provide their
                      name and, if possible, email address).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="privacy__item" id="privacy-6">
          <div className="privacy__item-block">
            <h2 className="privacy__item-title"> <span className="privacy__item-icon">
                <svg className="icon icon-secure">
                  <use href="/sprite.svg#icon-secure"></use>
                </svg>
              </span>How secure is the data we collect?</h2>
            <div className="privacy__item-i">
              <p>We have physical, electronic, and managerial procedures to safeguard and secure
                the information we collect.
              </p>
              <div className="data-collect">
                <div className="data-collect__item">
                  <div>
                    <h3 className="data-collect__title">And please remember:</h3>
                    <ul>
                      <li>You provide personal data at your own risk: unfortunately, no
                        data transmission is guaranteed to be 100% secure</li>
                      <li>You are responsible of your username and password: keep them
                        secret and safe!</li>
                      <li>If you believe your privacy has been breached, please contact us
                        immediately on <a href="mailto:support@juro.com">support@juro.com</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="privacy__item" id="privacy-7">
          <div className="privacy__item-block">
            <h2 className="privacy__item-title"> <span className="privacy__item-icon">
                <svg className="icon icon-location">
                  <use href="/sprite.svg#icon-location"></use>
                </svg>
              </span>Where do we store the data?</h2>
            <div className="privacy__item-i">
              <p>The personal data we collect is processed at our offices in London and Riga and
                in any data processing facilities operated by the third parties identified
                below.
              </p>
              <p> By submitting your personal data, you agree to this transfer, storing or
                processing by us. If we transfer or store your information outside the EEA in
                this way, we will take steps to ensure that your privacy rights
                continue to be protected as outlined in this Privacy Policy. </p>
            </div>
          </div>
        </div>
        <div className="privacy__item" id="privacy-8">
          <div className="privacy__item-block">
            <h2 className="privacy__item-title"> <span className="privacy__item-icon">
                <svg className="icon icon-duration">
                  <use href="/sprite.svg#icon-duration"></use>
                </svg>
              </span>How long do we store your data?</h2>
            <div className="privacy__item-i">
              <p>We will archive and stop actively using any personal identifiable information
                about you within 6 months from the last time you used Juro. We will delete your
                personal data from our archives no later than 6 years from
                the last time you used Juro or as agreed with you in a separate contract.</p>
            </div>
          </div>
        </div>
        <div className="privacy__item" id="privacy-9"> <input type="checkbox" className="act-checker" id="act-togle-9" />
          <div className="privacy__item-block act-smooth">
            <h2 className="privacy__item-title"> <span className="privacy__item-icon">
                <svg className="icon icon-3rdparties">
                  <use href="/sprite.svg#icon-3rdparties"></use>
                </svg>
              </span>Third parties who process your data</h2>
            <div className="privacy__item-i">
              <p>Tech businesses often use third parties to help them host their application,
                communicate with customers, power their emails etc. We partner with third
                parties who we believe are the best in their field at what they
                do.
              </p>
              <p>When we do this, sometimes it is necessary for us to share your data with them in
                order to get these services to work well. Your data is shared only when strictly
                necessary and according to the safeguards and good practices
                detailed in this Privacy Policy. Where personal data is transferred to a third
                party in the United States we take steps to ensure we agree the standard
                contractual clauses with them. We continually monitor this
                transfer mechanism. Any data transfers to the US are encrypted and generally
                consist of insensitive personal data.</p>
            </div>
          </div>
          <div className="privacy__item-block act-slide">
            <div className="privacy__item-i">
              <p>Here are the details of our main third-party service providers, and what data
                they collect or we share with them, where they store the data and why they need
                it:
              </p>
              <h3 className="data-collect__title">Infrastructure</h3>
              <table className="privacy__table">
                <thead>
                  <tr>
                    <th>Service provider</th>
                    <th>Data collected or shared</th>
                    <th>Purpose</th>
                    <th>Place of processing</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td data-label="Service provider">
                      <p>Amazon Web Services, Inc.</p> <a href="https://aws.amazon.com/privacy/">(Privacy
                        policy)</a>
                    </td>
                    <td data-label="ata collected or shared">
                      <ul>
                        <li>Contact details</li>
                        <li>Data from your contracts</li>
                        <li>Data that identifies you</li>
                      </ul>
                    </td>
                    <td data-label="Purpose">
                      <p>This is a web hosting provider: we use it to store contracts and
                        other data you generate by using the service securely in the
                        cloud.
                      </p>
                    </td>
                    <td data-label="Place of processing">
                      <p>EU (or US if you ask us to)</p>
                    </td>
                  </tr>
                  <tr>
                    <td data-label="Service provider">
                      <p>MongoDB, Inc.</p> <a href="https://www.mongodb.com/legal/privacy-policy">(Privacy
                        policy)</a>
                    </td>
                    <td data-label="Data collected or shared">
                      <ul>
                        <li>Contact details</li>
                        <li>Data from your contracts</li>
                        <li>Data that identifies you</li>
                        <li>Data on how you use Juro</li>
                      </ul>
                    </td>
                    <td data-label="Purpose">
                      <p>This is a hosted database provider: we use it to store data
                        generated through your use of Juro.
                      </p>
                    </td>
                    <td data-label="Place of processing">
                      <p>EU</p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <h3 className="data-collect__title">Analytics</h3>
              <table className="privacy__table">
                <thead>
                  <tr>
                    <th>Service provider</th>
                    <th>Data collected or shared</th>
                    <th>Purpose</th>
                    <th>Place of processing</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td data-label="Service provider">
                      <p>Google Analytics</p> <a href="https://www.google.com/policies/privacy/">(Privacy
                        policy)</a>
                    </td>
                    <td data-label="Data collected or shared">
                      <ul>
                        <li>Contact details</li>
                        <li>How you use Juro</li>
                        <li>Data that identifies you</li>
                        <li>Cookies</li>
                      </ul>
                    </td>
                    <td data-label="Purpose">
                      <p>GoogleAnalytics is a web analytics service: we use it to track
                        your use of the service, and prepare reports on user activity.
                      </p>
                    </td>
                    <td data-label="Place of processing">
                      <p>US</p>
                    </td>
                  </tr>
                  <tr>
                    <td data-label="Service provider">
                      <p>Heap, Inc.</p> <a href="https://heapanalytics.com/privacy">(Privacy policy)</a>
                    </td>
                    <td data-label="Data collected or shared">
                      <ul>
                        <li>Data on how you use Juro</li>
                        <li>How you use Juro</li>
                        <li>Cookies</li>
                      </ul>
                    </td>
                    <td data-label="Purpose">
                      <p>This is a web analytics service: we use it to track your use of
                        the service, and prepare reports on user activity .</p>
                    </td>
                    <td data-label="Place of processing">
                      <p>US</p>
                    </td>
                  </tr>
                  <tr>
                    <td data-label="Service provider">
                      <p>Mixpanel, Inc.</p> <a href="https://mixpanel.com/legal/privacy-policy/">(Privacy
                        policy)</a>
                    </td>
                    <td data-label="Data collected or shared">
                      <ul>
                        <li>Data on how you use Juro</li>
                        <li>How you use Juro</li>
                        <li>Cookies</li>
                      </ul>
                    </td>
                    <td data-label="Purpose">
                      <p>This is a web analytics service: we use it to track your use of
                        the service, and prepare reports on user activity .</p>
                    </td>
                    <td data-label="Place of processing">
                      <p>US</p>
                    </td>
                  </tr>
                  <tr>
                    <td data-label="Service provider">
                      <p>Hotjar, Inc.</p> <a href="https://www.hotjar.com/legal/policies/privacy">(Privacy
                        policy)</a>
                    </td>
                    <td data-label="Data collected or shared">
                      <ul>
                        <li>Data that identifies you</li>
                        <li>How you use Juro</li>
                        <li>Cookies</li>
                      </ul>
                    </td>
                    <td data-label="Purpose">
                      <p>This is a web analytics service: we use it to track your use of
                        the service, and prepare reports on user activity .</p>
                    </td>
                    <td data-label="Place of processing">
                      <p>EU</p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <h3 className="data-collect__title">Integrations (by your request)</h3>
              <table className="privacy__table">
                <thead>
                  <tr>
                    <th>Service provider</th>
                    <th>Data collected or shared</th>
                    <th>Purpose</th>
                    <th>Place of processing</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td data-label="Service provider">
                      <p>Salesforce, Inc.</p> <a href="https://www.salesforce.com/company/privacy/">(Privacy
                        policy)</a>
                    </td>
                    <td data-label="Data collected or shared">
                      <ul>
                        <li>Contact details</li>
                        <li>Data that identifies you</li>
                      </ul>
                    </td>
                    <td data-label="Purpose">
                      <p>This enables us to integrate Salesforce data into contracts you
                        produce using the service and store contracts in Salesforce.</p>
                    </td>
                    <td data-label="Place of processing">
                      <p>US</p>
                    </td>
                  </tr>
                  <tr>
                    <td data-label="Service provider">
                      <p>Slack Technologies, Inc.</p> <a href="https://slack.com/privacy-policy">(Privacy
                        policy)</a>
                    </td>
                    <td data-label="Data collected or shared">
                      <ul>
                        <li>Contact details</li>
                        <li>Data that identifies you</li>
                      </ul>
                    </td>
                    <td data-label="Purpose">
                      <p>This enables us to facilitate communication between our users.
                        When you authenticate with Slack, we share your data.</p>
                    </td>
                    <td data-label="Place of processing">
                      <p>US</p>
                    </td>
                  </tr>
                  <tr>
                    <td data-label="Service provider">
                      <p>Google, Inc.</p> <a href="https://policies.google.com/privacy">(Privacy policy)</a>
                    </td>
                    <td data-label="Data collected or shared">
                      <ul>
                        <li>Data that identifies you</li>
                        <li>How you use Juro</li>
                        <li>Contact details</li>
                        <li>Cookies</li>
                      </ul>
                    </td>
                    <td data-label="Purpose">
                      <p>This enables users to authenticate via Google and connect Google
                        services like GoogleDrive, where contracts may be stored.</p>
                    </td>
                    <td data-label="Place of processing">
                      <p>US</p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <h3 className="data-collect__title">Comms</h3>
              <table className="privacy__table">
                <thead>
                  <tr>
                    <th>Service provider</th>
                    <th>Data collected or shared</th>
                    <th>Purpose</th>
                    <th>Place of processing</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td data-label="Service provider">
                      <p>Sendgrid, Inc.</p> <a href="https://sendgrid.com/policies/privacy/">(Privacy
                        policy)</a>
                    </td>
                    <td data-label="Data collected or shared">
                      <ul>
                        <li>Contact details</li>
                        <li>How you use Juro</li>
                      </ul>
                    </td>
                    <td data-label="Purpose">
                      <p>We use this service for sending, storing and tracking emails.</p>
                    </td>
                    <td data-label="Place of processing">
                      <p>US</p>
                    </td>
                  </tr>
                  <tr>
                    <td data-label="Service provider">
                      <p>Sumo Group, Inc.</p> <a href="https://appsumo.com/privacy/">(Privacy policy)</a>
                    </td>
                    <td data-label="Data collected or shared">
                      <ul>
                        <li>Contact details</li>
                        <li>How you use Juro</li>
                        <li>Cookies</li>
                      </ul>
                    </td>
                    <td data-label="Purpose">
                      <p>This helps us collect email addresses for our mailing list and
                        shows us analytics on how you read our blog.</p>
                    </td>
                    <td data-label="Place of processing">
                      <p>US</p>
                    </td>
                  </tr>
                  <tr>
                    <td data-label="Service provider">
                      <p>Intercom, Inc.</p> <a href="https://www.intercom.com/terms-and-policies#terms">(Privacy
                        policy)</a>
                    </td>
                    <td data-label="Data collected or shared">
                      <ul>
                        <li>Contact details</li>
                        <li>How you use Juro</li>
                        <li>Cookies</li>
                      </ul>
                    </td>
                    <td data-label="Purpose">
                      <p>We use this service for customer communications, user interaction
                        and helpdesk assistance.
                      </p>
                    </td>
                    <td data-label="Place of processing">
                      <p>US</p>
                    </td>
                  </tr>
                  <tr>
                    <td data-label="Service provider">
                      <p>Hubspot, Inc.</p> <a href="https://legal.hubspot.com/privacy-policy">(Privacy
                        policy)</a>
                    </td>
                    <td data-label="Data collected or shared">
                      <ul>
                        <li>Contact details</li>
                        <li>Data in how you use Juro</li>
                        <li>Cookies</li>
                      </ul>
                    </td>
                    <td data-label="Purpose">
                      <p>We use this service for customer communications, hosting landing
                        pages and sending marketing emails to those who have opted in
                      </p>
                    </td>
                    <td data-label="Place of processing">
                      <p>US</p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <h3 className="data-collect__title">Payments</h3>
              <table className="privacy__table">
                <thead>
                  <tr>
                    <th>Service provider</th>
                    <th>Data collected or shared</th>
                    <th>Purpose</th>
                    <th>Place of processing</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td data-label="Service provider">
                      <p>Stripe, Inc.</p> <a href="https://stripe.com/privacy-shield-policy">(Privacy
                        policy)</a>
                    </td>
                    <td data-label="Data collected or shared">
                      <ul>
                        <li>Contact details</li>
                        <li>Financial information</li>
                        <li>Cookies</li>
                      </ul>
                    </td>
                    <td data-label="Purpose">
                      <p>This service processes payments for us.</p>
                    </td>
                    <td data-label="Place of processing">
                      <p>EU and US</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div> <label htmlFor="act-togle-9" className="privacy-toggle privacy__less"><i>Read less</i>
            x</label> <label htmlFor="act-togle-9" className="privacy-toggle privacy__more"><i>Read more</i>
            {'>'}</label>
        </div>
        <div className="privacy__item" id="privacy-10"> <input type="checkbox" className="act-checker" id="act-togle-10" />
          <div className="privacy__item-block act-smooth">
            <h2 className="privacy__item-title"> <span className="privacy__item-icon">
                <svg className="icon icon-cookies">
                  <use href="/sprite.svg#icon-cookies"></use>
                </svg>
              </span>Cookies</h2>
            <div className="privacy__item-i">
              <p>We use cookies. Unless you adjust your browser settings to refuse cookies, we
                (and these third parties) will issue cookies when you interact with Juro. These
                may be ‘session’ cookies, meaning they delete themselves
                when you leave Juro, or ‘persistent’ cookies which do not delete themselves and
                help us recognise you when you return so we can provide a tailored service.</p>
            </div>
          </div>
          <div className="privacy__item-block act-slide">
            <div className="privacy__item-i">
              <div className="data-collect">
                <div>
                  <h3 className="data-collect__title">How can I block cookies?.</h3>
                  <p>You can block cookies by activating a setting on your browser allowing
                    you to refuse the setting of cookies. You can also delete cookies
                    through your browser settings. If you use your browser settings to
                    disable,
                    reject, or block cookies (including essential cookies), certain parts of
                    our website will not function fully. In some cases, our website may not
                    be accessible at all. Please note that where third parties
                    use cookies we have no control over how those third parties use those
                    cookies </p>
                </div>
              </div>
              <h3 className="data-collect__title">Which specific cookies do we use?</h3>
              <table className="privacy__table">
                <thead>
                  <tr>
                    <th>Service provider</th>
                    <th>Key cookies</th>
                    <th>Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td data-label="Service provider">
                      <p>Google, Inc.</p>
                    </td>
                    <td data-label="Key cookies">
                      <p>NID</p>
                      <p>_ga</p>
                      <p>_gid</p>
                      <p>_gat</p>
                      <p>_gat_gtag_UA_68491880_5</p>
                    </td>
                    <td data-label="Purpose">
                      <p className="bs--mb-10">Google Analytics uses cookies allows us to see
                        information on the activities of visitors to our website and
                        users of our service, including page views, source and time
                        spent on Juro. The information
                        is depersonalized and is displayed as numbers, meaning it cannot
                        be tracked back to individuals. This will help to protect your
                        privacy.
                      </p>
                      <p> To opt out of being tracked by Google Analytics across all
                        websites click <a href="http://tools.google.com/dlpage/gaoptout" target="_blank"
                          className="bs--fs-inherit" rel="noreferrer">here.</a> </p>
                    </td>
                  </tr>
                  <tr>
                    <td data-label="Service provider">
                      <p>Intercom, Inc.</p>
                    </td>
                    <td data-label="Key cookies">
                      <p>_mkra_ctxt</p>
                      <p>intercom-id-zrkld6mp</p>
                    </td>
                    <td data-label="Purpose">
                      <p className="bs--mb-10">Intercom uses cookies to recognise particular
                        people who have interacted with Intercom through Juro
                        previously. This may be visitors to our website, Juro users or
                        counterparties.
                      </p>
                      <p> You may refuse the transmission of your Information by opting
                        out (contact them direct for more information), however please
                        note that you will delete the opt out cookie when you delete
                        your cookies
                        in your browser settings
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td data-label="Service provider">
                      <p>Mixpanel, Inc.</p>
                    </td>
                    <td data-label="Key cookies">
                      <p>mp_3faa6269af6f6387b9542dcbed4f6d6d_mixpanel</p>
                    </td>
                    <td data-label="Purpose">
                      <p className="bs--mb-10">Mixpanel uses cookies to help analyse how
                        visitors arrive at and use the service, and provides us with
                        statistical reports on activity. The information generated by
                        the cookies or other technologies
                        about your use of the Services (including IP address) is
                        transmitted to Mixpanel and potentially stored on servers in the
                        United States. Mixpanel will use this information to compile
                        reports for
                        us.
                      </p>
                      <p> You may refuse the transmission of your Information by opting
                        out (contact them direct for more information), however please
                        note that you will delete the opt out cookie when you delete
                        your cookies
                        in your browser settings.
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td data-label="Service provider">
                      <p>Heap, Inc.</p>
                    </td>
                    <td data-label="Key cookies">
                      <p>_hp2_id.3014805779</p>
                      <p>_hp2_ses_props.3014805779</p>
                      <p>_hp2_hld4605021571348642</p>
                      <p>_hp2_hld8898970323128733</p>
                      <p>_hp2_hld6696707121900611</p>
                    </td>
                    <td data-label="Purpose">
                      <p className="bs--mb-10">Heap uses cookies to help analyse how visitors
                        arrive at and use the service, and provides us with statistical
                        reports on activity. The information generated by the cookies or
                        other technologies about
                        your use of the Services (including IP address) is transmitted
                        to Heap and potentially stored on servers in the United States.
                        Heap will use this information to compile reports for us.</p>
                      <p> You may refuse the transmission of your Information by opting
                        out (contact them direct for more information), however please
                        note that you will delete the opt out cookie when you delete
                        your cookies
                        in your browser settings
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td data-label="Service provider">
                      <p>Juro Online Limited</p>
                    </td>
                    <td data-label="Key cookies">
                      <p>XSRF-TOKEN</p>
                      <p><strong>ssid</strong></p>
                    </td>
                    <td data-label="Purpose">
                      <p> We use these essential website cookies. These cookies are
                        strictly necessary to provide you with our services and to use
                        some of our features so you can’t refuse them. </p>
                    </td>
                  </tr>
                  <tr>
                    <td data-label="Service provider">
                      <p>Hubspot, Inc.</p>
                    </td>
                    <td data-label="Key cookies">
                      <p>__hssrc</p>
                      <p>Hubspotutk</p>
                      <p>__cfduid</p>
                      <p>__hstc</p>
                      <p>__hssc</p>
                    </td>
                    <td data-label="Purpose">
                      <p className="bs--mb-10">Hubspot uses cookies to recognise particular
                        people who have interacted with Juro previously. This may be
                        visitors to our website, Juro users or contract counterparties.
                      </p>
                      <p className="bs--mb-10"> You may refuse the transmission of your
                        Information by opting out (contact them direct for more
                        information), however please note that you will delete the opt
                        out cookie when you delete your cookies
                        in your browser settings.
                      </p>
                      <p> More info <a className="bs--fs-inherit"
                          href="https://knowledge.hubspot.com/articles/kcs_article/reports/what-cookies-does-hubspot-set-in-a-visitor-s-browser"
                          target="_blank" rel="noreferrer">here.</a> </p>
                    </td>
                  </tr>
                  <tr>
                    <td data-label="Service provider">
                      <p>LinkedIn, Inc.</p>
                    </td>
                    <td data-label="Key cookies">
                      <p>BizoID</p>
                      <p>Lang</p>
                      <p>Lidc</p>
                      <p>serMatchHistory</p>
                      <p>bcookie</p>
                      <p>bscookie</p>
                    </td>
                    <td data-label="Purpose">
                      <p> LinkedIn offers us a share button that place cookies and use
                        cookies to offer you personalised advertising. More info <a
                          href="https://www.linkedin.com/legal/cookie-policy" className="bs--fs-inherit"
                          target="_blank" rel="noreferrer">here.</a> </p>
                    </td>
                  </tr>
                  <tr>
                    <td data-label="Service provider">
                      <p>Sumo, Inc.</p>
                    </td>
                    <td data-label="Key cookies">
                      <p>__smVID</p>
                      <p>__smToken</p>
                    </td>
                    <td data-label="Purpose">
                      <p className="bs--mb-10"> Sumo uses cookies to recognise particular
                        people who have interacted with Juro previously. This are
                        visitors to our blog. </p>
                      <p> You may refuse the transmission of your Information by opting
                        out (contact them direct for more information), however please
                        note that you will delete the opt out cookie when you delete
                        your cookies
                        in your browser settings
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div> <label htmlFor="act-togle-10" className="privacy-toggle privacy__less"><i>Read less</i>
            x</label> <label htmlFor="act-togle-10" className="privacy-toggle privacy__more"><i>Read
              more</i> {'>'}</label>
        </div>
        <div className="privacy__item" id="privacy-11">
          <div className="privacy__item-block">
            <h2 className="privacy__item-title"> <span className="privacy__item-icon">
                <svg className="icon icon-feedback">
                  <use href="/sprite.svg#icon-feedback"></use>
                </svg>
              </span>Making this policy great</h2>
            <div className="privacy__item-i">
              <p>This privacy notice was built based on an open source design from
                <a href="https://juro.com" target="_blank" rel="noreferrer">Juro</a>. Get these patterns free - <a href="https://info.juro.com/privacy-policy-template"
                  target="_blank" rel="noreferrer">privacy
                  policy template</a> 🥳
              </p>
              <p>Please don’t make this the last time you read it as we will post any changes on
                this page - significant changes will of course be notified to you by email.</p>
            </div>
          </div>
        </div>
        {/* privacy content blocks end */}
      </div>
    </div>
  </div>
)

export default PrivacyPolicy
