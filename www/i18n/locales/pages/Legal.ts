// Privacy policy + terms of service copy for pasdiu.com.
//
// Scope rule: this document covers the marketing site ONLY. Anything that
// happens inside the Pasdiu app is governed by the in-app agreement — keep
// that boundary explicit in every section, so this page never has to be
// revised when the product changes.
//
// Plan names and prices are duplicated from the pricing page on purpose: a
// terms page that contradicts the price list is worse than no terms page.
// When pricing moves, update Pricing.ts AND this file.
//
// "@" is a linked-message operator in vue-i18n — always escape it as {'@'}.
export default {
  en: {
    privacy: {
      seoTitle: 'Privacy policy — Pasdiu',
      seoDescription:
        'What pasdiu.com collects, why we process it, who we share it with, and how to exercise your rights.',
      title: 'Privacy policy',
      subtitle:
        'What we collect on pasdiu.com, why we process it, who we share it with, and how to exercise your rights.',
      updatedLabel: 'Last updated',
      updatedDate: 'September 23, 2026',

      summaryTitle: 'At a glance',
      summaryNote:
        'This summary is for orientation only and does not replace the full text below.',
      summary1: 'We do not sell or rent personal data, and we run no targeted advertising.',
      summary2: 'The site sets no first-party cookies. Analytics runs only if you accept it.',
      summary3: 'We collect only what you send us through a form, plus aggregate usage metrics.',
      summary4: 'You can ask us to access, correct, or delete your data at any time.',

      operatorTitle: 'Who is responsible for your data',
      controllerLabel: 'Data controller',
      controllerBody: "MTM CYA Corp · United States · info{'@'}pasdiu.com",
      operatorBody:
        'Pasdiu is a product built and operated by MTM CYA Corp, trading as MTM Cofounders & Associates (“MTM”), a company incorporated in the United States. MTM is the controller of the personal data described in this policy. “Pasdiu”, “we”, and “our” refer to that same entity.',
      groupTitle: 'Relationship with MTM and other group products',
      groupBody:
        'MTM builds and operates several of its own software products; Pasdiu is one of them. You can find the company at mtmcya.com. Because all of those products share a team, infrastructure, and internal support, administration, and billing functions, authorised MTM personnel may access data processed through this site for those purposes — form submissions from this site are delivered to an MTM mailbox. That internal access is not a disclosure to a third party: it remains under MTM’s control and responsibility, with the same safeguards described here.',
      groupSeparate:
        'Each MTM product keeps its own site, its own privacy notice, and its own systems. We do not merge or cross-reference your profile between different products for commercial or advertising purposes.',

      scopeTitle: 'What this policy covers',
      scopeBody:
        'This policy applies only to the pasdiu.com marketing site: the public pages, the news section, and the contact form. Data you enter inside the Pasdiu application — workspaces, clients, tasks, deliverables, review threads, and the team and reviewer accounts you invite — is governed by the service agreement and privacy notice you accept when you create a workspace. If you hold an account, that document prevails over this one for everything that happens inside the product.',

      collectTitle: 'What we collect',
      collectIntro: 'We collect data in three situations, and no others:',
      collect1Title: 'When you submit a form',
      collect1Body:
        'The contact form collects your name, your work email address, and your message. You may optionally add your company and your team size. We send that to our internal inbox and email you a confirmation. Please do not send sensitive data, client material, or third-party confidential information through this form — it is not the right channel for it.',
      collect2Title: 'When you browse the site',
      collect2Body:
        'If you accept analytics, Google Analytics records aggregate usage data — page views, approximate origin, device type, time on page — so we can tell which content is useful. reCAPTCHA Enterprise analyses browser signals at the moment you submit the form to tell people from bots.',
      collect3Title: 'Server logs',
      collect3Body:
        'Our hosting provider automatically logs requests to the site (IP address, timestamp, resource requested, user agent). These are necessary to serve pages, diagnose incidents, and prevent abuse, and are kept for a short period.',
      collectNoneTitle: 'What we do not collect',
      collectNoneBody:
        'We build no advertising profiles, use no social-media pixels, buy no contact lists, and collect no special categories of data through this site.',

      basisTitle: 'Legal basis and purpose',
      basisIntro:
        'If you are in the EU, EEA, or UK, we process your data on the following GDPR bases:',
      basis1:
        'The contact form: pre-contractual steps at your request (Art. 6(1)(b)) — we answer what you asked.',
      basis2:
        'reCAPTCHA and server logs: legitimate interest (Art. 6(1)(f)) — keeping the site available and protecting the form from automated abuse.',
      basis3:
        'Google Analytics: consent (Art. 6(1)(a)) — you can decline or withdraw without losing functionality.',
      basis4:
        'Keeping records of correspondence and responding to lawful requests: legal obligation and legitimate interest (Art. 6(1)(c) and 6(1)(f)).',
      basisNote:
        'We never sell personal data, do not rent it, and do not use it for third-party advertising.',
      basisWithdraw:
        'Where processing rests on your consent, you may withdraw it at any time from the “Cookie preferences” link in the footer. Withdrawal does not affect the lawfulness of processing carried out beforehand.',

      sharingTitle: 'Who we share data with',
      sharingIntro:
        'We do not sell or rent your data. We rely on the following providers, who process it on our behalf and on our instructions:',
      sharing1:
        'Google (Firebase Hosting, Cloud Functions, Analytics, reCAPTCHA Enterprise) — site hosting, form processing, measurement, and abuse prevention.',
      sharing2:
        'Google Workspace (Gmail) — delivery of notification and confirmation emails.',
      sharing3:
        'MTM CYA Corp and its authorised personnel — support, administration, and commercial management, as described above.',
      sharingOther:
        'We may also disclose data where strictly necessary to comply with a legal obligation or a valid request from a competent authority, to establish or defend legal claims, or in connection with a merger, acquisition, or corporate reorganisation — in which case we would tell you before your data became subject to a different policy.',
      sharingTransfer:
        'These providers may process data outside the EEA, principally in the United States. Google relies on the European Commission’s Standard Contractual Clauses and on the EU-U.S. Data Privacy Framework for those transfers. MTM, as a U.S. entity, processes data in the United States under the same contractual safeguards.',

      cookiesTitle: 'Cookies and similar technologies',
      cookiesBody:
        'The site sets no first-party cookies. Google Analytics loads only if you accept the cookie notice — until then no measurement script runs and none of its cookies are set. Your choice is saved in your browser’s local storage, not a cookie, so we do not ask again; clearing the site’s data removes it. reCAPTCHA Enterprise loads only at the moment you submit the form and may set third-party cookies for bot detection; it is a strictly necessary security measure without which the form cannot work.',
      cookiesControl:
        'You can change or withdraw your decision at any time from the “Cookie preferences” link in the footer, and block or delete cookies in your browser settings. The site keeps working, though the form may stop submitting if you block reCAPTCHA. We honour browser privacy-preference signals where applicable law requires it.',

      retentionTitle: 'How long we keep data',
      retentionIntro:
        'We keep each item only for as long as the purpose that justified it requires:',
      retention1:
        'Form messages: for as long as needed to handle your enquiry and any resulting business relationship, up to 24 months from last contact.',
      retention2: 'Google Analytics data: 14 months, in aggregate.',
      retention3:
        'Server logs: a short period, per our hosting provider’s standard configuration.',
      retentionNote:
        'Once those periods pass we delete or anonymise the information, unless a legal obligation or the defence of a claim requires us to keep it longer.',

      rightsTitle: 'Your rights',
      rightsIntro:
        "You may at any time request access, rectification, erasure, restriction, portability, or object to processing, and withdraw consent. Email info{'@'}pasdiu.com and we will respond within 30 days. We may ask for additional information to verify your identity before acting on a request; we use it for that purpose only.",
      rightsFree:
        'Exercising these rights is free. We will not treat you differently or deny you any service for having done so.',
      rightsComplaint:
        'If you believe we have not handled your request properly, you may lodge a complaint with your national supervisory authority. In Spain that is the Agencia Española de Protección de Datos (aepd.es).',

      usRightsTitle: 'United States residents',
      usRightsBody:
        'If you live in California or another state with consumer privacy legislation, you also have the right to know, access, correct, and delete the personal information we hold about you, and not to be discriminated against for exercising those rights. You can exercise them through the same channel above and, if you prefer, through an authorised agent.',
      usRightsSale:
        'We do not sell personal information and do not share it for cross-context behavioural advertising, as the CCPA/CPRA and equivalent state laws define those terms. Nor do we process sensitive personal information to infer characteristics.',

      automatedTitle: 'Automated decision-making',
      automatedBody:
        'We make no decisions producing legal effects about you based solely on automated processing, and we do not profile you for that purpose. A reCAPTCHA score only determines whether a submission is accepted as legitimate; if one is blocked in error, write to us and we will handle it manually.',

      securityTitle: 'Security',
      securityBody:
        'The site is served entirely over HTTPS. Service credentials live in Google Secret Manager and never appear in site code. Access to the inbox receiving form submissions is limited to authorised personnel. No system is infallible: if a breach occurred that posed a high risk to your rights, we would notify you and the competent authority within the deadlines the law sets.',

      minorsTitle: 'Minors',
      minorsBody:
        'This site is aimed at media and production professionals and is not directed at anyone under 16. We do not knowingly collect data from minors. If we find we have received a minor’s data without the necessary authorisation, we will delete it; if you are a parent or guardian and believe this has happened, please write to us.',

      linksTitle: 'Links to third-party sites',
      linksBody:
        'This site may link to pages we do not control, including mtmcya.com and the sites of other MTM products. Each has its own privacy notice, and we are not responsible for their content or processing practices.',

      changesTitle: 'Changes to this policy',
      changesBody:
        'If we change this policy we will update the date shown above. Material changes will be announced prominently on the site and, where the law requires it, we will ask for fresh consent. We encourage you to review this page periodically.',

      contactTitle: 'Questions?',
      contactBody:
        "Email info{'@'}pasdiu.com and a human will reply. No endless forms.",
      contactCta: 'Go to contact',
      termsCta: 'Read the terms of service',
    },

    terms: {
      seoTitle: 'Terms of service — Pasdiu',
      seoDescription:
        'The terms for pasdiu.com and the Pasdiu app: accounts, plans and billing, your content, acceptable use, liability, and governing law.',
      title: 'Terms of service',
      subtitle:
        'The rules for using pasdiu.com and the Pasdiu app. Plain language, no buried fine print.',
      updatedLabel: 'Last updated',
      updatedDate: 'September 23, 2026',

      partiesTitle: 'Who you are contracting with',
      partiesBody:
        'Pasdiu is a product built and operated by MTM CYA Corp, trading as MTM Cofounders & Associates (“MTM”), a company incorporated in the United States. Wherever these terms say “we”, “our”, or “Pasdiu”, the contracting party is MTM CYA Corp. You can find the company and its other products at mtmcya.com.',
      partiesGroup:
        'MTM operates several of its own software products. Each has its own terms: accepting these does not bind you to another group product’s terms, or the reverse. MTM may provide the service through affiliated companies or its own personnel without altering your rights or our obligations to you.',

      acceptTitle: 'Acceptance',
      acceptBody:
        'By using pasdiu.com or creating a Pasdiu workspace you accept these terms. If you accept on behalf of a studio, agency, or company, you confirm you have authority to bind it and “you” means that organisation. If you disagree with any part, do not use the service.',
      acceptOrder:
        'These terms, together with the privacy policy and any plan-specific conditions you accept at purchase, form the entire agreement between the parties. In case of conflict, the plan-specific conditions prevail, then these terms.',

      serviceTitle: 'What Pasdiu is',
      serviceBody:
        'Pasdiu is a client-work logistics hub for media creators: nested projects, task boards, deliverables, versioned review, and a client-facing approval portal. The service is provided on an evolving basis: we add and improve features continuously, and may change or retire functionality with reasonable notice where the change is material. Some features may be offered in beta; those are provided without warranty and may change or disappear.',
      serviceMedia:
        'Pasdiu tracks and links to your media; it is not a media vault. Versions point at files held in storage you control — Drive, Dropbox, Frame.io, or similar — and those files stay under that provider’s terms and your own backup arrangements. We are not a backup service, and losing access to your storage provider is outside our control.',

      accountTitle: 'Accounts and responsibility',
      accountIntro: 'Using Pasdiu requires an account. In creating one you agree to:',
      account1: 'Provide accurate information and keep it current.',
      account2: 'Safeguard your credentials and not share them outside your team.',
      account3:
        'Be responsible for activity under your workspace, including the team members and client reviewers you invite.',
      account4: 'Be at least 18 and legally able to enter a contract.',
      account5: 'Tell us promptly if you notice unauthorised use of your account.',
      accountNote:
        'Client reviewers are free and unlimited, but they are still users of the service: whoever administers the workspace is responsible for who is invited, what each role can see, and for having the right to share client material with them.',

      plansTitle: 'Plans and billing',
      plansIntro:
        'Plans are priced per workspace, not per seat, and are billed monthly or annually. Annual billing charges twelve months at the price of ten. Client reviewer users are free and unlimited on every plan.',
      plan1:
        'Free — $0. Three team seats, three active clients, and the limits shown on the pricing page. No expiry.',
      plan2: 'Studio — $49 per workspace per month. Up to twenty team seats.',
      plan3: 'Agency — $149 per workspace per month. Unlimited team seats, SSO/SAML.',
      plan4:
        'Enterprise — custom pricing agreed in writing, with the additional terms set out in that agreement.',
      plansBilling:
        'Charges are taken in advance at the start of each cycle and renew automatically until you cancel. If you move up a plan mid-cycle, the remainder is prorated. Prices exclude tax; applicable taxes are added at invoice and are your responsibility.',
      plansChanges:
        'We may change prices with at least 30 days’ notice. New pricing takes effect at your next renewal, so you can always cancel before it reaches you.',
      plansFailure:
        'Payments are handled by a third-party payment provider; we do not store full card details. If a charge fails we will retry and tell you; if it still does not complete, we may limit or suspend access to paid features until the account is brought up to date.',
      plansLimits:
        'Plan limits (seats, active clients, active tasks, active deliverables) are ceilings on concurrent use, not metered consumption. If you reach one, we will tell you so you can archive, or move up a plan — we do not bill you for going over without asking.',

      cancelTitle: 'Cancellation and refunds',
      cancelBody:
        'Cancel any time from your workspace settings. Cancellation takes effect at the end of the cycle you have already paid for: access continues until then and no further charge is made. We do not refund cycles already begun unless applicable law requires it. After cancellation you can export your data for 30 days, after which we may delete it.',
      cancelConsumer:
        'If you contract as a consumer and your national law grants you a right of withdrawal, you may exercise it on the terms and within the periods that law sets, regardless of the above.',

      dataTitle: 'Your work stays yours',
      dataBody:
        'Briefs, tasks, comments, approvals, and the media you link remain yours and your clients’. You grant us only the licence needed to host, process, and display that content to the people you invite, as part of the service. We may use aggregated, anonymised data — which cannot identify you, your clients, or your work — to improve the product. We do not sell your data, do not share it with other workspaces, and do not train third-party models on it.',
      dataResponsibility:
        'You are responsible for having the right to upload or link the content you bring in, and for the rights of anyone who appears in it. Where you invite a client to review material, you confirm you may share it with them. How we handle personal data is set out in our privacy policy.',

      useTitle: 'Acceptable use',
      useIntro: 'In using Pasdiu you agree not to:',
      use1: 'Upload or link unlawful content, or material you have no rights to.',
      use2: 'Attempt to access workspaces, data, or systems that are not yours.',
      use3: 'Reverse-engineer the service, or extract data in bulk by automated means.',
      use4: 'Resell or sublicense access to third parties without our written consent.',
      use5: 'Deliberately overload the infrastructure or interfere with its operation.',
      use6:
        'Use the service in breach of applicable sanctions or export controls, or from a country subject to them.',
      useConsequence:
        'We may suspend or close workspaces that break these rules. Where reasonable we will warn you first and give you a chance to put it right; where the breach poses an immediate risk to the service, to others, or to us, suspension may be immediate.',
      useNotice:
        'If you believe content on Pasdiu infringes your rights, write to us with enough detail to identify the material and your claim, and we will review it and act where the claim is well founded.',

      thirdPartyTitle: 'Third-party services',
      thirdPartyBody:
        'The service depends on external providers (hosting, email, payments, identity) and integrates with the storage and review tools you choose to connect. We do not control those services and are not responsible for their availability or their terms: your use of them is governed by their own terms and policies. If a third party stops providing something a feature depends on, we may change or withdraw that feature.',

      ipTitle: 'Intellectual property',
      ipBody:
        'The software, the Pasdiu brand, the product design, and its documentation belong to MTM CYA Corp. These terms grant you a personal, limited, revocable, non-exclusive, non-transferable right to use the service, not ownership of any of those. Third-party and open-source components remain subject to their own licences.',
      ipFeedback:
        'If you send us suggestions, ideas, or comments about the product, we may use and act on them freely, with no obligation to compensate you or keep them confidential.',

      availabilityTitle: 'Availability and warranties',
      availabilityBody:
        'We work to keep the service available, but do not guarantee uninterrupted or error-free operation. There may be maintenance windows, third-party provider incidents, or outages outside our control. To the extent permitted by law, the service is provided “as is” and “as available”, without implied warranties of merchantability, fitness for a particular purpose, or non-infringement. Any service-level commitment applies only where it is stated in a signed Enterprise agreement.',

      indemnityTitle: 'Indemnity',
      indemnityBody:
        'If a third party brings a claim against us over content you uploaded or linked, over your use of the service in breach of these terms, or over an infringement of third-party rights attributable to you, you agree to hold us harmless and to cover the resulting damages, costs, and reasonable defence expenses. We will tell you about the claim promptly and you may take part in its defence. This obligation does not apply to those contracting as consumers where their national law prevents it.',

      liabilityTitle: 'Limitation of liability',
      liabilityBody:
        'To the fullest extent permitted by law, our total liability to you is limited to the amount you paid us in the twelve months preceding the event giving rise to it. We are not liable for lost profits, lost data, lost opportunities, missed deadlines, or indirect, incidental, special, punitive, or consequential damages, even if we were advised they were possible.',
      liabilityCarveout:
        'Nothing here excludes liability for wilful misconduct, gross negligence, personal injury, or anything else the law does not permit us to limit. If you are a consumer, you keep every right your national law gives you.',

      terminationTitle: 'Termination',
      terminationBody:
        'You may stop using Pasdiu at any time. We may suspend or end your access if you break these terms, if the law requires it, or if we discontinue the service — in which case we would give you enough notice to export your data. On termination your right to use the service ends; clauses that by their nature should survive (intellectual property, indemnity, limitation of liability, governing law) remain in force.',

      disputesTitle: 'Resolving disputes',
      disputesBody:
        'Before starting any action, both parties agree to try to resolve the dispute in good faith: write to us describing the problem, and we will have 30 days to find a solution. If no agreement is reached, the dispute will be settled by binding arbitration under the rules of a recognised arbitral institution in the applicable jurisdiction.',
      disputesCarveout:
        'This clause does not stop either party from bringing a qualifying claim in small-claims court, or from seeking injunctive relief to protect intellectual property. If you contract as a consumer, arbitration is binding only where your national law allows it; otherwise you keep the right to go to the courts of your domicile and to use the alternative dispute-resolution mechanisms that law provides.',

      lawTitle: 'Governing law',
      lawBody:
        'These terms are governed by the laws of the United States of America and of the state in which MTM CYA Corp is organised, excluding their conflict-of-law rules. If you are a consumer resident in the European Union, the United Kingdom, or Latin America, this clause does not deprive you of the protection of mandatory rules in your country of residence.',

      forceTitle: 'Force majeure',
      forceBody:
        'Neither party is liable for a failure caused by circumstances reasonably beyond its control: natural disasters, conflict, widespread network or power outages, acts of authority, or serious infrastructure-provider failures. The obligation is suspended while the cause lasts and resumes when it ends.',

      miscTitle: 'General provisions',
      miscIntro: 'The formalities that rarely matter, until they do:',
      misc1:
        'Assignment: you may not assign this agreement without our written consent. We may assign it to an MTM group company or in connection with a corporate transaction, leaving your rights intact.',
      misc2:
        'Severability: if a clause is held invalid, it is replaced by the valid clause closest to its purpose and the rest stays in force.',
      misc3: 'No waiver: not exercising a right on one occasion is not a waiver of it later.',
      misc4:
        'Notices: we will write to the email on your account or notify you in-app; such a message counts as received.',
      misc5:
        'Independence: these terms create no employment, partnership, agency, or franchise relationship between the parties.',

      changesTitle: 'Changes to these terms',
      changesBody:
        'If we change these terms we will update the date shown above. Material changes will be announced by email or in-app at least 30 days ahead. Continuing to use the service after that date means you accept them; if you disagree, you can cancel before they take effect.',

      contactTitle: 'Questions?',
      contactBody:
        "Email info{'@'}pasdiu.com. We would rather clear things up in advance than argue about them later.",
      contactCta: 'Go to contact',
      privacyCta: 'Read the privacy policy',
    },
  },

  es: {
    privacy: {
      seoTitle: 'Política de privacidad — Pasdiu',
      seoDescription:
        'Qué datos recoge pasdiu.com, con qué finalidad, con quién se comparten y cómo ejercer tus derechos.',
      title: 'Política de privacidad',
      subtitle:
        'Qué datos recogemos en pasdiu.com, por qué los tratamos, con quién los compartimos y cómo puedes ejercer tus derechos.',
      updatedLabel: 'Última actualización',
      updatedDate: '23 de septiembre de 2026',

      summaryTitle: 'En resumen',
      summaryNote:
        'Este resumen es orientativo y no sustituye al texto completo que aparece debajo.',
      summary1: 'No vendemos ni alquilamos datos personales, y no hacemos publicidad dirigida.',
      summary2: 'El sitio no instala cookies propias. La analítica solo se activa si la aceptas.',
      summary3: 'Solo recogemos lo que nos envías por el formulario y métricas de uso agregadas.',
      summary4: 'Puedes pedirnos acceso, corrección o eliminación de tus datos cuando quieras.',

      operatorTitle: 'Quién es responsable de tus datos',
      controllerLabel: 'Responsable del tratamiento',
      controllerBody: "MTM CYA Corp · Estados Unidos · info{'@'}pasdiu.com",
      operatorBody:
        'Pasdiu es un producto creado y operado por MTM CYA Corp, que opera comercialmente como MTM Cofounders & Associates («MTM»), una sociedad constituida en los Estados Unidos. MTM es la entidad responsable del tratamiento de los datos personales descritos en esta política. «Pasdiu», «nosotros» y «nuestro» se refieren a esa misma entidad.',
      groupTitle: 'Relación con MTM y con otros productos del grupo',
      groupBody:
        'MTM construye y opera varios productos de software propios; Pasdiu es uno de ellos. Puedes conocer la empresa en mtmcya.com. Como todos los productos comparten equipo, infraestructura y funciones internas de soporte, administración y facturación, el personal autorizado de MTM puede acceder a los datos tratados a través de este sitio para esas finalidades —los envíos del formulario se entregan en un buzón de MTM—. Ese acceso interno no es una cesión a terceros: sigue estando bajo el control y la responsabilidad de MTM, con las mismas garantías descritas aquí.',
      groupSeparate:
        'Cada producto de MTM mantiene su propio sitio, su propio aviso de privacidad y sus propios sistemas. No unificamos ni cruzamos tu perfil entre productos distintos con fines comerciales o publicitarios.',

      scopeTitle: 'Qué cubre esta política',
      scopeBody:
        'Esta política se aplica únicamente al sitio de marketing pasdiu.com: las páginas públicas, la sección de noticias y el formulario de contacto. El tratamiento de los datos que introduces dentro de la aplicación Pasdiu —workspaces, clientes, tareas, entregables, hilos de revisión y las cuentas de equipo y de revisores que invitas— se rige por el acuerdo de servicio y el aviso de privacidad que aceptas al crear un workspace. Si tienes una cuenta, ese documento prevalece sobre este para todo lo que ocurre dentro del producto.',

      collectTitle: 'Qué datos recogemos',
      collectIntro: 'Recogemos datos en tres situaciones, y en ninguna otra:',
      collect1Title: 'Cuando rellenas el formulario',
      collect1Body:
        'El formulario de contacto recoge tu nombre, tu email de trabajo y tu mensaje. Opcionalmente puedes añadir tu empresa y el tamaño de tu equipo. Enviamos esa información a nuestro buzón interno y te remitimos una confirmación. No nos envíes por este formulario datos sensibles, material de clientes ni información confidencial de terceros: no es el canal adecuado.',
      collect2Title: 'Cuando navegas por el sitio',
      collect2Body:
        'Si aceptas la analítica, Google Analytics registra datos de uso agregados —páginas vistas, procedencia aproximada, tipo de dispositivo, duración de la visita— para entender qué contenidos resultan útiles. reCAPTCHA Enterprise analiza señales de tu navegador en el momento de enviar el formulario para distinguir a personas de bots.',
      collect3Title: 'Registros técnicos del servidor',
      collect3Body:
        'Nuestro proveedor de alojamiento genera registros automáticos de las peticiones al sitio (dirección IP, fecha y hora, recurso solicitado, agente de usuario). Son necesarios para servir las páginas, detectar incidencias y prevenir abusos, y se conservan durante un periodo breve.',
      collectNoneTitle: 'Lo que no recogemos',
      collectNoneBody:
        'No creamos perfiles publicitarios, no usamos píxeles de redes sociales, no compramos listas de contactos y no recogemos categorías especiales de datos a través de este sitio.',

      basisTitle: 'Base legal y finalidad',
      basisIntro:
        'Si te encuentras en la UE, el EEE o el Reino Unido, tratamos tus datos sobre las siguientes bases del RGPD:',
      basis1:
        'Formulario de contacto: medidas precontractuales a petición del interesado (art. 6.1.b) — respondemos a lo que nos preguntas.',
      basis2:
        'reCAPTCHA y registros técnicos: interés legítimo (art. 6.1.f) — mantener el sitio disponible y proteger el formulario del abuso automatizado.',
      basis3:
        'Google Analytics: consentimiento (art. 6.1.a) — puedes rechazarlo o retirarlo sin perder funcionalidad.',
      basis4:
        'Conservación de comunicaciones y respuesta a requerimientos: obligación legal e interés legítimo (art. 6.1.c y 6.1.f).',
      basisNote:
        'Nunca vendemos datos personales, no los alquilamos ni los utilizamos para publicidad de terceros.',
      basisWithdraw:
        'Cuando el tratamiento se basa en tu consentimiento, puedes retirarlo en cualquier momento desde el enlace «Preferencias de cookies» del pie de página. Retirarlo no afecta a la licitud del tratamiento anterior.',

      sharingTitle: 'Con quién compartimos datos',
      sharingIntro:
        'No vendemos ni cedemos tus datos. Recurrimos a los siguientes proveedores, que los tratan por cuenta nuestra y siguiendo nuestras instrucciones:',
      sharing1:
        'Google (Firebase Hosting, Cloud Functions, Analytics, reCAPTCHA Enterprise) — alojamiento del sitio, procesamiento del formulario, medición y protección antifraude.',
      sharing2:
        'Google Workspace (Gmail) — entrega de los correos de notificación y de confirmación.',
      sharing3:
        'MTM CYA Corp y su personal autorizado — soporte, administración y gestión comercial, según se describe más arriba.',
      sharingOther:
        'Además, podemos comunicar datos cuando sea estrictamente necesario para cumplir una obligación legal o un requerimiento válido de una autoridad competente, para ejercer o defender reclamaciones, o en el marco de una fusión, adquisición o reestructuración societaria —en cuyo caso te informaríamos antes de que tus datos queden sujetos a una política distinta.',
      sharingTransfer:
        'Estos proveedores pueden tratar datos fuera del EEE, principalmente en los Estados Unidos. Google se acoge a las Cláusulas Contractuales Tipo aprobadas por la Comisión Europea y al EU-U.S. Data Privacy Framework para dichas transferencias. MTM, como entidad estadounidense, trata los datos en Estados Unidos con las mismas garantías contractuales.',

      cookiesTitle: 'Cookies y tecnologías similares',
      cookiesBody:
        'El sitio no utiliza cookies propias. Google Analytics solo se carga si aceptas el aviso de cookies: hasta entonces no se ejecuta ningún script de medición ni se instala ninguna cookie suya. Tu elección se guarda en el almacenamiento local de tu navegador —no es una cookie— para no volver a preguntártelo; puedes borrarla vaciando los datos del sitio. reCAPTCHA Enterprise se carga únicamente en el momento de enviar el formulario y puede instalar cookies de terceros para la detección de bots; es una medida de seguridad estrictamente necesaria para que el formulario funcione.',
      cookiesControl:
        'Puedes cambiar o retirar tu decisión cuando quieras desde el enlace «Preferencias de cookies» del pie de página, y bloquear o eliminar cookies desde la configuración de tu navegador. El sitio seguirá funcionando, aunque el formulario puede dejar de enviarse si bloqueas reCAPTCHA. Respetamos las señales de preferencia de privacidad que tu navegador envíe cuando la ley aplicable lo exija.',

      retentionTitle: 'Cuánto tiempo conservamos los datos',
      retentionIntro:
        'Conservamos cada dato solo el tiempo necesario para la finalidad que lo justificó:',
      retention1:
        'Mensajes del formulario: mientras sean necesarios para atender tu consulta y la relación comercial posterior, con un máximo de 24 meses desde el último contacto.',
      retention2: 'Datos de Google Analytics: 14 meses, de forma agregada.',
      retention3:
        'Registros técnicos del servidor: periodo breve, conforme a la configuración estándar de nuestro proveedor de alojamiento.',
      retentionNote:
        'Cumplidos esos plazos eliminamos o anonimizamos la información, salvo que una obligación legal o la defensa de una reclamación exija conservarla más tiempo.',

      rightsTitle: 'Tus derechos',
      rightsIntro:
        "Puedes ejercer en cualquier momento los derechos de acceso, rectificación, supresión, limitación, portabilidad y oposición, así como retirar tu consentimiento. Escríbenos a info{'@'}pasdiu.com y te responderemos en un plazo máximo de 30 días. Podemos pedirte información adicional para verificar tu identidad antes de atender la solicitud; la usaremos solo para eso.",
      rightsFree:
        'Ejercer estos derechos es gratuito. No te trataremos de forma distinta ni te negaremos ningún servicio por haberlos ejercido.',
      rightsComplaint:
        'Si consideras que no hemos atendido correctamente tu solicitud, puedes reclamar ante la autoridad de control de tu país. En España es la Agencia Española de Protección de Datos (aepd.es).',

      usRightsTitle: 'Residentes en Estados Unidos',
      usRightsBody:
        'Si resides en California u otro estado con legislación de privacidad del consumidor, dispones además de los derechos a conocer, acceder, corregir y eliminar la información personal que tengamos sobre ti, y a no sufrir discriminación por ejercerlos. Puedes ejercerlos por el mismo canal indicado arriba y, si lo prefieres, a través de un agente autorizado.',
      usRightsSale:
        'No vendemos información personal ni la compartimos para publicidad conductual entre contextos, en el sentido que la CCPA/CPRA y leyes estatales equivalentes dan a esos términos. Tampoco tratamos información personal sensible con fines de inferencia de características.',

      automatedTitle: 'Decisiones automatizadas',
      automatedBody:
        'No tomamos decisiones que produzcan efectos jurídicos sobre ti basadas únicamente en el tratamiento automatizado, ni elaboramos perfiles con ese fin. La puntuación de reCAPTCHA solo determina si un envío se acepta como legítimo; si se bloquea por error, escríbenos y lo resolvemos manualmente.',

      securityTitle: 'Seguridad',
      securityBody:
        'El sitio se sirve íntegramente por HTTPS. Las credenciales de nuestros servicios se guardan en Google Secret Manager y nunca se incluyen en el código del sitio. El acceso al buzón que recibe los envíos está restringido al personal autorizado. Ningún sistema es infalible: si se produjera una violación de seguridad que suponga un riesgo alto para tus derechos, te lo notificaremos y lo comunicaremos a la autoridad competente en los plazos que marca la ley.',

      minorsTitle: 'Menores',
      minorsBody:
        'Este sitio se dirige a profesionales de medios y producción y no está destinado a menores de 16 años. No recogemos datos de menores de forma consciente. Si detectamos que hemos recibido datos de un menor sin la autorización correspondiente, los eliminaremos; si eres madre, padre o tutor y crees que ha ocurrido, escríbenos.',

      linksTitle: 'Enlaces a sitios de terceros',
      linksBody:
        'Este sitio puede enlazar a páginas que no controlamos, incluida mtmcya.com y los sitios de otros productos de MTM. Cada uno tiene su propio aviso de privacidad y nosotros no respondemos de su contenido ni de sus prácticas de tratamiento.',

      changesTitle: 'Cambios en esta política',
      changesBody:
        'Si modificamos esta política actualizaremos la fecha que figura arriba. Los cambios sustanciales se comunicarán de forma destacada en el sitio y, cuando la ley lo exija, te pediremos un nuevo consentimiento. Te recomendamos revisar esta página periódicamente.',

      contactTitle: '¿Dudas?',
      contactBody:
        "Escríbenos a info{'@'}pasdiu.com y te contestamos. Sin formularios interminables.",
      contactCta: 'Ir a contacto',
      termsCta: 'Ver términos del servicio',
    },

    terms: {
      seoTitle: 'Términos del servicio — Pasdiu',
      seoDescription:
        'Las condiciones de pasdiu.com y de la aplicación Pasdiu: cuentas, planes y facturación, tu contenido, uso aceptable, responsabilidad y ley aplicable.',
      title: 'Términos del servicio',
      subtitle:
        'Las reglas de uso de pasdiu.com y de la aplicación Pasdiu. En lenguaje claro, sin letra pequeña escondida.',
      updatedLabel: 'Última actualización',
      updatedDate: '23 de septiembre de 2026',

      partiesTitle: 'Con quién contratas',
      partiesBody:
        'Pasdiu es un producto creado y operado por MTM CYA Corp, que opera comercialmente como MTM Cofounders & Associates («MTM»), una sociedad constituida en los Estados Unidos. Cuando en estos términos leas «nosotros», «nuestro» o «Pasdiu», la parte contratante es MTM CYA Corp. Puedes conocer la empresa y el resto de sus productos en mtmcya.com.',
      partiesGroup:
        'MTM opera varios productos de software propios. Cada uno tiene sus propios términos: aceptar estos no te vincula a los de otro producto del grupo, ni al revés. MTM puede prestar el servicio a través de sociedades filiales o personal propio, sin que ello altere tus derechos ni nuestras obligaciones frente a ti.',

      acceptTitle: 'Aceptación',
      acceptBody:
        'Al usar pasdiu.com o crear un workspace en Pasdiu aceptas estos términos. Si los aceptas en nombre de un estudio, una agencia o una empresa, declaras que tienes autoridad para vincularla y «tú» se refiere a esa organización. Si no estás de acuerdo con alguna parte, no uses el servicio.',
      acceptOrder:
        'Estos términos, junto con la política de privacidad y cualquier condición específica que aceptes al contratar un plan, forman el acuerdo completo entre las partes. Si hubiera contradicción, prevalecen las condiciones específicas del plan y, a continuación, estos términos.',

      serviceTitle: 'Qué es Pasdiu',
      serviceBody:
        'Pasdiu es un hub logístico de trabajo con clientes para creadores de medios: proyectos anidados, tableros de tareas, entregables, revisión por versiones y un portal de aprobación para el cliente. El servicio se presta de forma evolutiva: añadimos y mejoramos funciones de forma continua, y podemos modificar o retirar funcionalidades avisando con antelación razonable cuando el cambio sea sustancial. Algunas funciones pueden ofrecerse en fase beta; se proporcionan sin garantía y pueden cambiar o desaparecer.',
      serviceMedia:
        'Pasdiu organiza y enlaza tus medios; no es un almacén de archivos. Las versiones apuntan a ficheros alojados en el almacenamiento que tú controlas —Drive, Dropbox, Frame.io o similar— y esos ficheros siguen sujetos a las condiciones de ese proveedor y a tus propias copias de seguridad. No somos un servicio de respaldo, y perder el acceso a tu proveedor de almacenamiento queda fuera de nuestro control.',

      accountTitle: 'Cuentas y responsabilidad',
      accountIntro: 'Para usar Pasdiu necesitas una cuenta. Al crearla te comprometes a:',
      account1: 'Facilitar información veraz y mantenerla actualizada.',
      account2: 'Custodiar tus credenciales y no compartirlas fuera de tu equipo.',
      account3:
        'Responder de la actividad realizada en tu workspace, incluidas las personas de tu equipo y los revisores de cliente que invites.',
      account4: 'Tener al menos 18 años y capacidad legal para contratar.',
      account5: 'Avisarnos sin demora si detectas un uso no autorizado de tu cuenta.',
      accountNote:
        'Los revisores de cliente son gratuitos e ilimitados, pero siguen siendo usuarios del servicio: quien administra el workspace responde de a quién invita, de lo que cada rol puede ver y de tener derecho a compartir con ellos el material del cliente.',

      plansTitle: 'Planes y facturación',
      plansIntro:
        'Los planes se cobran por workspace, no por puesto, con ciclo mensual o anual. La modalidad anual equivale a doce meses al precio de diez. Los revisores de cliente son gratuitos e ilimitados en todos los planes.',
      plan1:
        'Free — 0 $. Tres puestos de equipo, tres clientes activos y los límites indicados en la página de precios. Sin caducidad.',
      plan2: 'Studio — 49 $ por workspace y mes. Hasta veinte puestos de equipo.',
      plan3: 'Agency — 149 $ por workspace y mes. Puestos ilimitados y SSO/SAML.',
      plan4:
        'Enterprise — precio a medida acordado por escrito, con las condiciones adicionales que se fijen en ese acuerdo.',
      plansBilling:
        'El cobro se realiza por adelantado al inicio de cada ciclo y se renueva automáticamente hasta que canceles. Si subes de plan a mitad de ciclo, se prorratea el importe restante. Los precios se muestran sin impuestos; los aplicables se añaden en la factura y son a tu cargo.',
      plansChanges:
        'Podemos actualizar los precios avisando con al menos 30 días de antelación. El nuevo precio se aplica a partir de tu siguiente renovación, de modo que siempre puedas cancelar antes de que te afecte.',
      plansFailure:
        'Los pagos se procesan a través de un proveedor externo; no almacenamos los datos completos de tu tarjeta. Si un cobro falla, intentaremos cobrarlo de nuevo y te avisaremos; si sigue sin completarse, podemos limitar o suspender el acceso a las funciones de pago hasta regularizar la situación.',
      plansLimits:
        'Los límites del plan (puestos, clientes activos, tareas activas, entregables activos) son techos de uso simultáneo, no consumo medido. Si alcanzas uno, te avisaremos para que archives o subas de plan: no te cobramos por excederlo sin preguntarte.',

      cancelTitle: 'Cancelación y reembolsos',
      cancelBody:
        'Puedes cancelar cuando quieras desde la configuración de tu workspace. La cancelación surte efecto al final del ciclo ya pagado: conservas el acceso hasta esa fecha y no se emite un cobro nuevo. No reembolsamos ciclos ya iniciados, salvo que la ley aplicable lo exija. Tras la cancelación puedes exportar tus datos durante 30 días; después podemos eliminarlos.',
      cancelConsumer:
        'Si contratas como consumidor y la normativa de tu país te reconoce un derecho de desistimiento, podrás ejercerlo en los términos y plazos que esa normativa establezca, con independencia de lo anterior.',

      dataTitle: 'Tu trabajo es tuyo',
      dataBody:
        'Los briefs, tareas, comentarios, aprobaciones y los medios que enlazas siguen siendo tuyos y de tus clientes. Nos concedes únicamente la licencia necesaria para alojar, procesar y mostrar ese contenido a las personas que invites, como parte del servicio. Podemos usar datos agregados y anonimizados —que no permiten identificarte a ti, a tus clientes ni a tu trabajo— para mejorar el producto. No vendemos tus datos, no los compartimos con otros workspaces y no entrenamos modelos de terceros con ellos.',
      dataResponsibility:
        'Respondes de tener derecho a subir o enlazar el contenido que incorporas y de los derechos de quienes aparezcan en él. Cuando invitas a un cliente a revisar material, declaras que puedes compartirlo con él. El tratamiento de datos personales se describe en nuestra política de privacidad.',

      useTitle: 'Uso aceptable',
      useIntro: 'Al usar Pasdiu te comprometes a no:',
      use1: 'Subir o enlazar contenido ilícito, ni material sobre el que no tengas derechos.',
      use2: 'Intentar acceder a workspaces, datos o sistemas que no te correspondan.',
      use3:
        'Realizar ingeniería inversa del servicio, ni extraer datos de forma masiva y automatizada.',
      use4:
        'Revender o sublicenciar el acceso a terceros sin nuestro consentimiento por escrito.',
      use5:
        'Sobrecargar la infraestructura de forma deliberada ni interferir en su funcionamiento.',
      use6:
        'Usar el servicio infringiendo sanciones o controles de exportación aplicables, ni desde un país sujeto a ellos.',
      useConsequence:
        'Podemos suspender o cerrar workspaces que incumplan estas reglas. Cuando sea razonable te avisaremos antes y te daremos ocasión de corregirlo; si el incumplimiento supone un riesgo inmediato para el servicio, para terceros o para nosotros, la suspensión puede ser inmediata.',
      useNotice:
        'Si consideras que algún contenido en Pasdiu vulnera tus derechos, escríbenos con el detalle suficiente para identificar el material y tu reclamación: la revisaremos y actuaremos cuando esté fundada.',

      thirdPartyTitle: 'Servicios de terceros',
      thirdPartyBody:
        'El servicio se apoya en proveedores externos (alojamiento, correo, pagos, identidad) y se integra con las herramientas de almacenamiento y revisión que tú decidas conectar. No controlamos esos servicios y no respondemos de su disponibilidad ni de sus condiciones: su uso se rige por sus propios términos y políticas. Si un tercero deja de prestar un servicio del que dependa una función, podremos modificarla o retirarla.',

      ipTitle: 'Propiedad intelectual',
      ipBody:
        'El software, la marca Pasdiu, el diseño del producto y su documentación pertenecen a MTM CYA Corp. Estos términos te otorgan un derecho de uso personal, limitado, revocable, no exclusivo y no transferible sobre el servicio, no la propiedad de ninguno de esos elementos. Los componentes de terceros y de código abierto siguen sujetos a sus respectivas licencias.',
      ipFeedback:
        'Si nos envías sugerencias, ideas o comentarios sobre el producto, podremos usarlos e incorporarlos libremente, sin obligación de compensarte ni de mantenerlos confidenciales.',

      availabilityTitle: 'Disponibilidad y garantías',
      availabilityBody:
        'Trabajamos para mantener el servicio disponible, pero no garantizamos un funcionamiento ininterrumpido ni libre de errores. Puede haber ventanas de mantenimiento, incidencias de proveedores externos o interrupciones ajenas a nuestro control. En la medida en que la ley lo permita, el servicio se presta «tal cual» y «según disponibilidad», sin garantías implícitas de comerciabilidad, idoneidad para un fin concreto o no infracción. Cualquier compromiso de nivel de servicio solo aplica si consta en un acuerdo Enterprise firmado.',

      indemnityTitle: 'Indemnidad',
      indemnityBody:
        'Si un tercero nos reclama por el contenido que has subido o enlazado, por tu uso del servicio incumpliendo estos términos o por la vulneración de derechos de terceros que te sea imputable, te comprometes a mantenernos indemnes y a asumir los daños, costes y gastos razonables de defensa que de ello se deriven. Te informaremos de la reclamación sin demora y podrás participar en su defensa. Esta obligación no se aplica a quienes contratan como consumidores cuando la ley de su país lo impida.',

      liabilityTitle: 'Limitación de responsabilidad',
      liabilityBody:
        'En la medida máxima permitida por la ley, nuestra responsabilidad total frente a ti se limita al importe que nos hayas abonado en los doce meses anteriores al hecho que la origine. No respondemos de lucro cesante, pérdida de datos, pérdida de oportunidades, incumplimiento de plazos de entrega ni daños indirectos, incidentales, especiales, punitivos o consecuenciales, aunque se nos hubiera advertido de su posibilidad.',
      liabilityCarveout:
        'Nada en estos términos excluye la responsabilidad por dolo, negligencia grave, daños personales o cualquier otra que la ley no permita limitar. Si eres consumidor, conservas íntegramente los derechos que te reconozca la normativa de tu país.',

      terminationTitle: 'Terminación',
      terminationBody:
        'Puedes dejar de usar Pasdiu en cualquier momento. Nosotros podemos suspender o finalizar tu acceso si incumples estos términos, si lo exige la ley, o si dejamos de prestar el servicio —en cuyo caso te avisaríamos con antelación suficiente para exportar tus datos. Al terminar cesa tu derecho de uso; las cláusulas que por su naturaleza deban sobrevivir (propiedad intelectual, indemnidad, limitación de responsabilidad, ley aplicable) siguen vigentes.',

      disputesTitle: 'Resolución de conflictos',
      disputesBody:
        'Antes de iniciar cualquier acción, las partes se comprometen a intentar resolver el conflicto de buena fe: escríbenos describiendo el problema y dispondremos de 30 días para buscar una solución. Si no se alcanza un acuerdo, la controversia se resolverá mediante arbitraje vinculante conforme a las reglas de una institución arbitral reconocida en la jurisdicción aplicable.',
      disputesCarveout:
        'Esta cláusula no impide a ninguna de las partes acudir a un tribunal de cuantía menor cuando proceda, ni solicitar medidas cautelares para proteger derechos de propiedad intelectual. Si contratas como consumidor, el arbitraje solo será obligatorio si la ley de tu país lo permite; en caso contrario, conservas el derecho a acudir a los tribunales de tu domicilio y a los mecanismos de resolución alternativa que esa ley prevea.',

      lawTitle: 'Ley aplicable',
      lawBody:
        'Estos términos se rigen por la legislación de los Estados Unidos de América y del estado en el que MTM CYA Corp esté constituida, con exclusión de sus normas sobre conflicto de leyes. Si eres consumidor residente en la Unión Europea, el Reino Unido o Latinoamérica, esta cláusula no te priva de la protección que te otorguen las normas imperativas de tu país de residencia.',

      forceTitle: 'Fuerza mayor',
      forceBody:
        'Ninguna de las partes responderá del incumplimiento causado por circunstancias razonablemente fuera de su control: catástrofes naturales, conflictos, cortes generalizados de red o energía, actos de autoridad o fallos graves de proveedores de infraestructura. La obligación queda suspendida mientras dure la causa y se reanuda al cesar.',

      miscTitle: 'Disposiciones generales',
      miscIntro: 'Cuestiones formales que rara vez importan, hasta que importan:',
      misc1:
        'Cesión: no puedes ceder este acuerdo sin nuestro consentimiento escrito. Nosotros podemos cederlo a una sociedad del grupo MTM o en el marco de una operación societaria, manteniendo tus derechos intactos.',
      misc2:
        'Nulidad parcial: si una cláusula resulta inválida, se sustituirá por la válida más próxima a su finalidad y el resto seguirá en vigor.',
      misc3: 'No renuncia: no ejercer un derecho en un momento dado no supone renunciar a él más adelante.',
      misc4:
        'Notificaciones: te escribiremos al correo asociado a tu cuenta o te avisaremos dentro de la aplicación; esa comunicación se considera recibida.',
      misc5:
        'Independencia: estos términos no crean una relación laboral, societaria, de agencia ni de franquicia entre las partes.',

      changesTitle: 'Cambios en estos términos',
      changesBody:
        'Si modificamos estos términos actualizaremos la fecha que figura arriba. Los cambios sustanciales se comunicarán por correo electrónico o dentro de la aplicación con al menos 30 días de antelación. Seguir usando el servicio después de esa fecha implica aceptarlos; si no estás de acuerdo, puedes cancelar antes de que entren en vigor.',

      contactTitle: '¿Alguna duda?',
      contactBody:
        "Escríbenos a info{'@'}pasdiu.com. Preferimos aclarar las cosas antes que discutirlas después.",
      contactCta: 'Ir a contacto',
      privacyCta: 'Ver política de privacidad',
    },
  },
}
