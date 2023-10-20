export const integrations = [
  {
    __typename: "EmployerIntegration",
    apiIntegration: null,
    slug: "applicantpro",
    id: "aXJpOi8vYXBpcy5xYS5pbmRlZWQubmV0L0VtcGxveWVySW50ZWdyYXRpb24vOGIyNTAxMDItMzdmNS00MjdhLTk1NjYtNmQ5ZjY0NjIyOTdl",
    kind: "ATS_SYNC",
    displayName: "ApplicantPro",
    content: {
      __typename: "EmployerIntegrationContent",
      backgroundColor: "#1D87CD",
      logoUrl:
        "https://images.ctfassets.net/zxaso63vxv6d/7EXOoIFKdyaN2tVILSBDaS/b34765559e7fca88599526048023610d/applicantpro-logo-white-400.png",
      xmlInstructionsLink: null,
      xmlInstructionsPdf: null,
      xmlInstructionsContact: null,
      howToInstallLink: null,
      supportLink: null,
      displayName: "ApplicantPro",
      additionalInfos: [
        {
          __typename: "EmployerIntegrationAdditionalInfoSection",
          sectionHeader: "Employer Help Center",
          links: [
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Search our help resources",
              url: "https://indeed.force.com/employerSupport1/s/?language=en_US",
            },
          ],
        },
        {
          __typename: "EmployerIntegrationAdditionalInfoSection",
          sectionHeader: "Integrations support",
          links: [
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Contact your Indeed representative",
              url: "https://employers.indeed.com/contact_indeed?from=gnav-empcenter",
            },
          ],
        },
        {
          __typename: "EmployerIntegrationAdditionalInfoSection",
          sectionHeader: "Indeed policies",
          links: [
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Terms of Service",
              url: "https://www.qa.indeed.net/legal",
            },
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Privacy Policy",
              url: "https://www.qa.indeed.net/legal?hl=en#privacypolicy",
            },
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Cookie Policy",
              url: "https://hrtechprivacy.com/brands/indeed#Cookies",
            },
          ],
        },
      ],
    },
    xmlIntegration: {
      __typename: "AtsIntegrationModel",
      remoteKey: "applicantpro-xml",
      kind: "XML",
      supportedFeatures: ["APPLY_SYNC", "JOB_SYNC"],
      published: "UNRELEASED",
    },
  },
  {
    __typename: "EmployerIntegration",
    apiIntegration: null,
    slug: "apploi",
    id: "aXJpOi8vYXBpcy5xYS5pbmRlZWQubmV0L0VtcGxveWVySW50ZWdyYXRpb24vYXBwbG9p",
    kind: "ATS_SYNC",
    displayName: "Apploi",
    content: {
      __typename: "EmployerIntegrationContent",
      backgroundColor: "#FFFFFF",
      logoUrl:
        "https://images.ctfassets.net/zxaso63vxv6d/BQWZNWJgYMGwbRkRJ7MPL/3819559677bcb5710d92a59720fcca55/Apploi.png",
      xmlInstructionsLink: null,
      xmlInstructionsPdf: null,
      xmlInstructionsContact: {
        __typename: "EmployerIntegrationInstructionsContact",
        description:
          "Contact your ATS customer support team to learn about syncing your jobs and applications with Indeed.",
        contactEmails: ["support@apploi.com"],
        contactPhoneNumbers: [],
        getHelpOnlineLink: {
          __typename: "EmployerIntegrationLink",
          url: "https://apploi.com/contact/",
        },
        contactLinks: [],
      },
      howToInstallLink: null,
      supportLink: null,
      displayName: "Apploi",
      additionalInfos: [
        {
          __typename: "EmployerIntegrationAdditionalInfoSection",
          sectionHeader: "Employer Help Center",
          links: [
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Search our help resources",
              url: "https://indeed.force.com/employerSupport1/s/?language=en_US",
            },
          ],
        },
        {
          __typename: "EmployerIntegrationAdditionalInfoSection",
          sectionHeader: "Indeed policies",
          links: [
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Terms of Service",
              url: "https://www.qa.indeed.net/legal",
            },
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Privacy Policy",
              url: "https://www.qa.indeed.net/legal?hl=en#privacypolicy",
            },
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Cookie Policy",
              url: "https://hrtechprivacy.com/brands/indeed#Cookies",
            },
          ],
        },
        {
          __typename: "EmployerIntegrationAdditionalInfoSection",
          sectionHeader: "Integrations support",
          links: [
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Contact your Indeed representative",
              url: "https://employers.indeed.com/contact_indeed?from=gnav-empcenter",
            },
          ],
        },
      ],
    },
    xmlIntegration: {
      __typename: "AtsIntegrationModel",
      remoteKey: "apploi-xml",
      kind: "XML",
      supportedFeatures: ["APPLY_SYNC", "JOB_SYNC"],
      published: "UNRELEASED",
    },
  },
  {
    __typename: "EmployerIntegration",
    apiIntegration: {
      __typename: "AtsIntegrationModel",
      remoteKey: "bamboo",
      kind: "API",
      supportedFeatures: ["CANDIDATE_SYNC"],
      published: "UNRELEASED",
    },
    slug: "bamboo",
    id: "aXJpOi8vYXBpcy5xYS5pbmRlZWQubmV0L0VtcGxveWVySW50ZWdyYXRpb24vY2VjN2YxZmMtMzQ4Ny00MDBmLWE0Y2MtNzQwMWM3YjgwMzFi",
    kind: "ATS_SYNC",
    displayName: "Bamboo HR",
    content: {
      __typename: "EmployerIntegrationContent",
      backgroundColor: "#73C41D",
      logoUrl:
        "https://images.ctfassets.net/zxaso63vxv6d/2CFYirsZORIlHVylNZiV7l/c3137e4963dece804b43a1659179eba0/bamboohr-emblem-white.png",
      xmlInstructionsLink: null,
      xmlInstructionsPdf: null,
      xmlInstructionsContact: null,
      howToInstallLink: null,
      supportLink: null,
      displayName: "BambooHR",
      additionalInfos: [
        {
          __typename: "EmployerIntegrationAdditionalInfoSection",
          sectionHeader: "Employer Help Center",
          links: [
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Search our help resources",
              url: "https://indeed.force.com/employerSupport1/s/?language=en_US",
            },
          ],
        },
        {
          __typename: "EmployerIntegrationAdditionalInfoSection",
          sectionHeader: "Integrations support",
          links: [
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Contact your Indeed representative",
              url: "https://employers.indeed.com/contact_indeed?from=gnav-empcenter",
            },
          ],
        },
        {
          __typename: "EmployerIntegrationAdditionalInfoSection",
          sectionHeader: "Indeed policies",
          links: [
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Terms of Service",
              url: "https://www.qa.indeed.net/legal",
            },
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Privacy Policy",
              url: "https://www.qa.indeed.net/legal?hl=en#privacypolicy",
            },
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Cookie Policy",
              url: "https://hrtechprivacy.com/brands/indeed#Cookies",
            },
          ],
        },
      ],
    },
    xmlIntegration: null,
  },
  {
    __typename: "EmployerIntegration",
    apiIntegration: {
      __typename: "AtsIntegrationModel",
      remoteKey: "beamery",
      kind: "API",
      supportedFeatures: ["CANDIDATE_SYNC"],
      published: "UNRELEASED",
    },
    slug: "beamery",
    id: "aXJpOi8vYXBpcy5xYS5pbmRlZWQubmV0L0VtcGxveWVySW50ZWdyYXRpb24vNmIwOWYzMjMtM2EwMy00NTk3LTkzNjQtNTZlNDUzNjdiYjVh",
    kind: "ATS_SYNC",
    displayName: "Beamery",
    content: {
      __typename: "EmployerIntegrationContent",
      backgroundColor: "#201E5A",
      logoUrl:
        "https://images.ctfassets.net/zxaso63vxv6d/3kWz0fcoWOzgYvlZwIaepR/39f1995e9b588df926f9b7fd058a188e/beamery-emblem__1_.svg",
      xmlInstructionsLink: null,
      xmlInstructionsPdf: null,
      xmlInstructionsContact: null,
      howToInstallLink: null,
      supportLink: null,
      displayName: "Beamery",
      additionalInfos: [
        {
          __typename: "EmployerIntegrationAdditionalInfoSection",
          sectionHeader: "Employer Help Center",
          links: [
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Search our help resources",
              url: "https://indeed.force.com/employerSupport1/s/?language=en_US",
            },
          ],
        },
        {
          __typename: "EmployerIntegrationAdditionalInfoSection",
          sectionHeader: "Integrations support",
          links: [
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Contact your Indeed representative",
              url: "https://employers.indeed.com/contact_indeed?from=gnav-empcenter",
            },
          ],
        },
        {
          __typename: "EmployerIntegrationAdditionalInfoSection",
          sectionHeader: "Indeed policies",
          links: [
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Terms of Service",
              url: "https://www.qa.indeed.net/legal",
            },
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Privacy Policy",
              url: "https://www.qa.indeed.net/legal?hl=en#privacypolicy",
            },
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Cookie Policy",
              url: "https://hrtechprivacy.com/brands/indeed#Cookies",
            },
          ],
        },
      ],
    },
    xmlIntegration: null,
  },
  {
    __typename: "EmployerIntegration",
    apiIntegration: null,
    slug: "breezyhr",
    id: "aXJpOi8vYXBpcy5xYS5pbmRlZWQubmV0L0VtcGxveWVySW50ZWdyYXRpb24vMGFlYjRmYzctZjNhNC00YjQxLWE3OGYtM2JlOGQ0YjUzMTg5",
    kind: "ATS_SYNC",
    displayName: "Breezy HR",
    content: {
      __typename: "EmployerIntegrationContent",
      backgroundColor: "#5CC0EB",
      logoUrl:
        "https://images.ctfassets.net/zxaso63vxv6d/4lMZf3r5NFlYEQpHtg87Rc/cb95cf110862d91ec3042f2ced3a22bf/breezy-emblem-white.svg",
      xmlInstructionsLink: null,
      xmlInstructionsPdf: null,
      xmlInstructionsContact: {
        __typename: "EmployerIntegrationInstructionsContact",
        description:
          "Contact your ATS customer support team to learn about syncing your jobs and applications with Indeed. ",
        contactEmails: ["support@breezyhr.com"],
        contactPhoneNumbers: [],
        getHelpOnlineLink: null,
        contactLinks: [],
      },
      howToInstallLink: null,
      supportLink: null,
      displayName: "Breezy HR",
      additionalInfos: [
        {
          __typename: "EmployerIntegrationAdditionalInfoSection",
          sectionHeader: "Employer Help Center",
          links: [
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Search our help resources",
              url: "https://indeed.force.com/employerSupport1/s/?language=en_US",
            },
          ],
        },
        {
          __typename: "EmployerIntegrationAdditionalInfoSection",
          sectionHeader: "Integrations support",
          links: [
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Contact your Indeed representative",
              url: "https://employers.indeed.com/contact_indeed?from=gnav-empcenter",
            },
          ],
        },
        {
          __typename: "EmployerIntegrationAdditionalInfoSection",
          sectionHeader: "Indeed policies",
          links: [
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Terms of Service",
              url: "https://www.qa.indeed.net/legal",
            },
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Privacy Policy",
              url: "https://www.qa.indeed.net/legal?hl=en#privacypolicy",
            },
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Cookie Policy",
              url: "https://hrtechprivacy.com/brands/indeed#Cookies",
            },
          ],
        },
      ],
    },
    xmlIntegration: {
      __typename: "AtsIntegrationModel",
      remoteKey: "breezyhr-xml",
      kind: "XML",
      supportedFeatures: ["APPLY_SYNC", "JOB_SYNC"],
      published: "PUBLIC",
    },
  },
  {
    __typename: "EmployerIntegration",
    apiIntegration: {
      __typename: "AtsIntegrationModel",
      remoteKey: "bullhorn",
      kind: "API",
      supportedFeatures: ["CANDIDATE_SYNC"],
      published: "ALPHA",
    },
    slug: "bullhorn",
    id: "aXJpOi8vYXBpcy5xYS5pbmRlZWQubmV0L0VtcGxveWVySW50ZWdyYXRpb24vZDc4ODM5ZTUtZTJlMi00ZjgxLWJhYzctODhmOGIxMzFmMmJl",
    kind: "ATS_SYNC",
    displayName: "Bullhorn",
    content: {
      __typename: "EmployerIntegrationContent",
      backgroundColor: "#202945",
      logoUrl:
        "https://images.ctfassets.net/zxaso63vxv6d/6ysUwRmHwKhTVArYZpyV1W/4da76fdd57b069eca4cfa393d70af5ee/bullhorn-emblem.svg",
      xmlInstructionsLink:
        "https://help.bullhorn.com/bhatsTopics/s/article/ATS-Publishing-Jobs-to-the-Open-Source-Career-Portal-and-Indeed",
      xmlInstructionsPdf: null,
      xmlInstructionsContact: null,
      howToInstallLink: null,
      supportLink: null,
      displayName: "Bullhorn",
      additionalInfos: [
        {
          __typename: "EmployerIntegrationAdditionalInfoSection",
          sectionHeader: "Documentation",
          links: [
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Indeed API installation",
              url: "https://developer.indeed.com/docs/install-guides/bullhorn",
            },
          ],
        },
        {
          __typename: "EmployerIntegrationAdditionalInfoSection",
          sectionHeader: "Employer Help Center",
          links: [
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Search our help resources",
              url: "https://indeed.force.com/employerSupport1/s/?language=en_US",
            },
          ],
        },
        {
          __typename: "EmployerIntegrationAdditionalInfoSection",
          sectionHeader: "Integrations support",
          links: [
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Contact your Indeed representative",
              url: "https://employers.indeed.com/contact_indeed?from=gnav-empcenter",
            },
          ],
        },
        {
          __typename: "EmployerIntegrationAdditionalInfoSection",
          sectionHeader: "Indeed policies",
          links: [
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Terms of Service",
              url: "https://www.qa.indeed.net/legal",
            },
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Privacy Policy",
              url: "https://www.qa.indeed.net/legal?hl=en#privacypolicy",
            },
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Cookie Policy",
              url: "https://hrtechprivacy.com/brands/indeed#Cookies",
            },
          ],
        },
      ],
    },
    xmlIntegration: {
      __typename: "AtsIntegrationModel",
      remoteKey: "bullhorn-xml",
      kind: "XML",
      supportedFeatures: ["APPLY_SYNC", "JOB_SYNC"],
      published: "UNRELEASED",
    },
  },
  {
    __typename: "EmployerIntegration",
    apiIntegration: {
      __typename: "AtsIntegrationModel",
      remoteKey: "cornerstone",
      kind: "API",
      supportedFeatures: ["CANDIDATE_SYNC"],
      published: "UNRELEASED",
    },
    slug: "cornerstone",
    id: "aXJpOi8vYXBpcy5xYS5pbmRlZWQubmV0L0VtcGxveWVySW50ZWdyYXRpb24vZTYzZmU2NzgtMWFhZS00MThiLThlNzQtOWVjZGVkZGFhYWEz",
    kind: "ATS_SYNC",
    displayName: "Cornerstone",
    content: {
      __typename: "EmployerIntegrationContent",
      backgroundColor: "#FA4619",
      logoUrl:
        "https://images.ctfassets.net/zxaso63vxv6d/25YIewpjh3LLFvgKKfZnc1/493b6eb96584c21cd54ec6f0b226c674/cornerstone-emblem.svg",
      xmlInstructionsLink: null,
      xmlInstructionsPdf: null,
      xmlInstructionsContact: null,
      howToInstallLink: null,
      supportLink: null,
      displayName: "Cornerstone",
      additionalInfos: [
        {
          __typename: "EmployerIntegrationAdditionalInfoSection",
          sectionHeader: "Employer Help Center",
          links: [
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Search our help resources",
              url: "https://indeed.force.com/employerSupport1/s/?language=en_US",
            },
          ],
        },
        {
          __typename: "EmployerIntegrationAdditionalInfoSection",
          sectionHeader: "Integrations support",
          links: [
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Contact your Indeed representative",
              url: "https://employers.indeed.com/contact_indeed?from=gnav-empcenter",
            },
          ],
        },
        {
          __typename: "EmployerIntegrationAdditionalInfoSection",
          sectionHeader: "Indeed policies",
          links: [
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Terms of Service",
              url: "https://www.qa.indeed.net/legal",
            },
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Privacy Policy",
              url: "https://www.qa.indeed.net/legal?hl=en#privacypolicy",
            },
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Cookie Policy",
              url: "https://hrtechprivacy.com/brands/indeed#Cookies",
            },
          ],
        },
      ],
    },
    xmlIntegration: null,
  },
  {
    __typename: "EmployerIntegration",
    apiIntegration: {
      __typename: "AtsIntegrationModel",
      remoteKey: "greenhouse",
      kind: "API",
      supportedFeatures: ["CANDIDATE_SYNC"],
      published: "PUBLIC",
    },
    slug: "greenhouse",
    id: "aXJpOi8vYXBpcy5xYS5pbmRlZWQubmV0L0VtcGxveWVySW50ZWdyYXRpb24vY2VjN2YxZmMtMzQ4Ny00MDBmLWE0Y2MtNzQwMWM3YjgwMzFh",
    kind: "ATS_SYNC",
    displayName: "Greenhouse",
    content: {
      __typename: "EmployerIntegrationContent",
      backgroundColor: "#00A97F",
      logoUrl:
        "https://images.ctfassets.net/zxaso63vxv6d/1SC1U5WAPk7pJtUWUziu9k/ffc2e9767cf974bf183172d10f6bddbb/Greenhouse_logo_on_white.svg",
      xmlInstructionsLink:
        "https://support.greenhouse.io/hc/en-us/articles/360004835852-Indeed-Apply",
      xmlInstructionsPdf: null,
      xmlInstructionsContact: null,
      howToInstallLink: null,
      supportLink: "https://support.greenhouse.io/hc/en-us",
      displayName: "Greenhouse",
      additionalInfos: [
        {
          __typename: "EmployerIntegrationAdditionalInfoSection",
          sectionHeader: "Documentation",
          links: [
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Indeed API installation",
              url: "https://developer.indeed.com/docs/install-guides/greenhouse/",
            },
          ],
        },
        {
          __typename: "EmployerIntegrationAdditionalInfoSection",
          sectionHeader: "Employer Help Center",
          links: [
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Search our help resources",
              url: "https://indeed.force.com/employerSupport1/s/?language=en_US",
            },
          ],
        },
        {
          __typename: "EmployerIntegrationAdditionalInfoSection",
          sectionHeader: "Integrations support",
          links: [
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Contact your Indeed representative",
              url: "https://employers.indeed.com/contact_indeed?from=gnav-empcenter",
            },
          ],
        },
        {
          __typename: "EmployerIntegrationAdditionalInfoSection",
          sectionHeader: "Indeed policies",
          links: [
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Terms of Service",
              url: "https://www.qa.indeed.net/legal",
            },
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Privacy Policy",
              url: "https://www.qa.indeed.net/legal?hl=en#privacypolicy",
            },
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Cookie Policy",
              url: "https://hrtechprivacy.com/brands/indeed#Cookies",
            },
          ],
        },
      ],
    },
    xmlIntegration: {
      __typename: "AtsIntegrationModel",
      remoteKey: "greenhouse-xml",
      kind: "XML",
      supportedFeatures: ["APPLY_SYNC", "JOB_SYNC"],
      published: "PUBLIC",
    },
  },
  {
    __typename: "EmployerIntegration",
    apiIntegration: {
      __typename: "AtsIntegrationModel",
      remoteKey: "icims",
      kind: "API",
      supportedFeatures: ["CANDIDATE_SYNC"],
      published: "ALPHA",
    },
    slug: "icims",
    id: "aXJpOi8vYXBpcy5xYS5pbmRlZWQubmV0L0VtcGxveWVySW50ZWdyYXRpb24vNDM4NDEwOWYtMDAxMS00MDA1LWFlMDMtNTlmNDVmZGFjM2Vh",
    kind: "ATS_SYNC",
    displayName: "iCIMS",
    content: {
      __typename: "EmployerIntegrationContent",
      backgroundColor: "#58A7AE",
      logoUrl:
        "https://images.ctfassets.net/zxaso63vxv6d/1DD5H3QSlRZBQyLyoDhbXE/5fc2225844c097d7f7b42348f34a320e/iCIMS-logo-white.svg",
      xmlInstructionsLink:
        "https://community.icims.com/s/article/Understanding-and-Configuring-Indeed-Apply",
      xmlInstructionsPdf: null,
      xmlInstructionsContact: null,
      howToInstallLink: null,
      supportLink: null,
      displayName: "iCIMS",
      additionalInfos: [
        {
          __typename: "EmployerIntegrationAdditionalInfoSection",
          sectionHeader: "Documentation",
          links: [
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Indeed API installation",
              url: "https://developer.indeed.com/docs/install-guides/icims",
            },
          ],
        },
        {
          __typename: "EmployerIntegrationAdditionalInfoSection",
          sectionHeader: "Employer Help Center",
          links: [
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Search our help resources",
              url: "https://indeed.force.com/employerSupport1/s/?language=en_US",
            },
          ],
        },
        {
          __typename: "EmployerIntegrationAdditionalInfoSection",
          sectionHeader: "Integrations support",
          links: [
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Contact your Indeed representative",
              url: "https://employers.indeed.com/contact_indeed?from=gnav-empcenter",
            },
          ],
        },
        {
          __typename: "EmployerIntegrationAdditionalInfoSection",
          sectionHeader: "Indeed policies",
          links: [
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Terms of Service",
              url: "https://www.qa.indeed.net/legal",
            },
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Privacy Policy",
              url: "https://www.qa.indeed.net/legal?hl=en#privacypolicy",
            },
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Cookie Policy",
              url: "https://hrtechprivacy.com/brands/indeed#Cookies",
            },
          ],
        },
      ],
    },
    xmlIntegration: {
      __typename: "AtsIntegrationModel",
      remoteKey: "icims-xml",
      kind: "XML",
      supportedFeatures: ["APPLY_SYNC", "JOB_SYNC"],
      published: "PUBLIC",
    },
  },
  {
    __typename: "EmployerIntegration",
    apiIntegration: {
      __typename: "AtsIntegrationModel",
      remoteKey: "jobvite",
      kind: "API",
      supportedFeatures: ["CANDIDATE_SYNC"],
      published: "ALPHA",
    },
    slug: "jobvite",
    id: "aXJpOi8vYXBpcy5xYS5pbmRlZWQubmV0L0VtcGxveWVySW50ZWdyYXRpb24vOGY5OGExZmQtYmRhNS00YmFjLTg5NGEtMWZiZThhYWMwNzhj",
    kind: "ATS_SYNC",
    displayName: "Jobvite",
    content: {
      __typename: "EmployerIntegrationContent",
      backgroundColor: "#3E86FA",
      logoUrl:
        "https://images.ctfassets.net/zxaso63vxv6d/6rZhCuKUhEaTh6x6v1LfAO/175f41674bda7991023dc3dfac06f878/jobvite-logo-white.svg",
      xmlInstructionsLink: null,
      xmlInstructionsPdf: null,
      xmlInstructionsContact: null,
      howToInstallLink: null,
      supportLink: null,
      displayName: "Jobvite",
      additionalInfos: [
        {
          __typename: "EmployerIntegrationAdditionalInfoSection",
          sectionHeader: "Documentation",
          links: [
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Indeed API installation",
              url: "https://developer.indeed.com/docs/install-guides/jobvite",
            },
          ],
        },
        {
          __typename: "EmployerIntegrationAdditionalInfoSection",
          sectionHeader: "Integrations support",
          links: [
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Contact your Indeed representative",
              url: "https://employers.indeed.com/contact_indeed?from=gnav-empcenter",
            },
          ],
        },
        {
          __typename: "EmployerIntegrationAdditionalInfoSection",
          sectionHeader: "Employer Help Center",
          links: [
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Search our help resources",
              url: "https://indeed.force.com/employerSupport1/s/?language=en_US",
            },
          ],
        },
        {
          __typename: "EmployerIntegrationAdditionalInfoSection",
          sectionHeader: "Indeed policies",
          links: [
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Terms of Service",
              url: "https://www.qa.indeed.net/legal",
            },
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Privacy Policy",
              url: "https://www.qa.indeed.net/legal?hl=en#privacypolicy",
            },
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Cookie Policy",
              url: "https://hrtechprivacy.com/brands/indeed#Cookies",
            },
          ],
        },
      ],
    },
    xmlIntegration: null,
  },
  {
    __typename: "EmployerIntegration",
    apiIntegration: {
      __typename: "AtsIntegrationModel",
      remoteKey: "lever",
      kind: "API",
      supportedFeatures: ["CANDIDATE_SYNC"],
      published: "ALPHA",
    },
    slug: "lever",
    id: "aXJpOi8vYXBpcy5xYS5pbmRlZWQubmV0L0VtcGxveWVySW50ZWdyYXRpb24vODJmMjMyNmMtYmI3My00NWZiLTk0NDYtNmNlMjE2ZWZiMWM3",
    kind: "ATS_SYNC",
    displayName: "Lever",
    content: {
      __typename: "EmployerIntegrationContent",
      backgroundColor: "#42454E",
      logoUrl:
        "https://images.ctfassets.net/zxaso63vxv6d/6x1jtaJhPXXKdDSVVagRzD/80f11fcbbacde9bd82b1d143000fef3f/lever-logo-white.svg",
      xmlInstructionsLink:
        "https://help.lever.co/hc/en-us/articles/4415854889613-Enabling-and-using-the-Indeed-Job-Feed-and-Indeed-Apply-integration",
      xmlInstructionsPdf: null,
      xmlInstructionsContact: null,
      howToInstallLink: "/docs/pages/nviebvivinrwlmwqpoifjb/lever/embedded",
      supportLink:
        "https://help.lever.co/hc/en-us/articles/4803305469197-Submitting-support-tickets",
      displayName: "Lever",
      additionalInfos: [
        {
          __typename: "EmployerIntegrationAdditionalInfoSection",
          sectionHeader: "Documentation",
          links: [
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Indeed API installation",
              url: "https://developer.indeed.com/docs/install-guides/lever/",
            },
          ],
        },
        {
          __typename: "EmployerIntegrationAdditionalInfoSection",
          sectionHeader: "Integrations support",
          links: [
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Contact your Indeed representative",
              url: "https://employers.indeed.com/contact_indeed?from=gnav-empcenter",
            },
          ],
        },
        {
          __typename: "EmployerIntegrationAdditionalInfoSection",
          sectionHeader: "Employer Help Center",
          links: [
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Search our help resources",
              url: "https://indeed.force.com/employerSupport1/s/?language=en_US",
            },
          ],
        },
        {
          __typename: "EmployerIntegrationAdditionalInfoSection",
          sectionHeader: "Indeed policies",
          links: [
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Terms of Service",
              url: "https://www.qa.indeed.net/legal",
            },
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Privacy Policy",
              url: "https://www.qa.indeed.net/legal?hl=en#privacypolicy",
            },
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Cookie Policy",
              url: "https://hrtechprivacy.com/brands/indeed#Cookies",
            },
          ],
        },
      ],
    },
    xmlIntegration: {
      __typename: "AtsIntegrationModel",
      remoteKey: "lever-xml",
      kind: "XML",
      supportedFeatures: ["APPLY_SYNC", "JOB_SYNC"],
      published: "PUBLIC",
    },
  },
  {
    __typename: "EmployerIntegration",
    apiIntegration: {
      __typename: "AtsIntegrationModel",
      remoteKey: "noop",
      kind: "API",
      supportedFeatures: [
        "APPLY_SYNC",
        "CANDIDATE_SYNC",
        "DISPOSITION_SYNC",
        "JOB_SYNC",
      ],
      published: "UNRELEASED",
    },
    slug: "noop",
    id: "aXJpOi8vYXBpcy5xYS5pbmRlZWQubmV0L0VtcGxveWVySW50ZWdyYXRpb24vODJmMjMyNmMtYmI3My00NWZiLTk0NDYtNmNlMjE2ZWZhYmNk",
    kind: "ATS_SYNC",
    displayName: "NoOp",
    content: {
      __typename: "EmployerIntegrationContent",
      backgroundColor: "#289BB5",
      logoUrl:
        "https://images.ctfassets.net/zxaso63vxv6d/7KvRvRALPwCuZDEJAUheGF/cba9d0d7c3846df822fbb69d12abc4ba/noop-logo-white.svg",
      xmlInstructionsLink: null,
      xmlInstructionsPdf: null,
      xmlInstructionsContact: null,
      howToInstallLink: null,
      supportLink: null,
      displayName: "NoOp",
      additionalInfos: [
        {
          __typename: "EmployerIntegrationAdditionalInfoSection",
          sectionHeader: "Employer Help Center",
          links: [
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Search our help resources",
              url: "https://indeed.force.com/employerSupport1/s/?language=en_US",
            },
          ],
        },
        {
          __typename: "EmployerIntegrationAdditionalInfoSection",
          sectionHeader: "Integrations support",
          links: [
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Contact your Indeed representative",
              url: "https://employers.indeed.com/contact_indeed?from=gnav-empcenter",
            },
          ],
        },
        {
          __typename: "EmployerIntegrationAdditionalInfoSection",
          sectionHeader: "Indeed policies",
          links: [
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Terms of Service",
              url: "https://www.qa.indeed.net/legal",
            },
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Privacy Policy",
              url: "https://www.qa.indeed.net/legal?hl=en#privacypolicy",
            },
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Cookie Policy",
              url: "https://hrtechprivacy.com/brands/indeed#Cookies",
            },
          ],
        },
      ],
    },
    xmlIntegration: {
      __typename: "AtsIntegrationModel",
      remoteKey: "noop-xml",
      kind: "XML",
      supportedFeatures: ["APPLY_SYNC", "JOB_SYNC"],
      published: "UNRELEASED",
    },
  },
  {
    __typename: "EmployerIntegration",
    apiIntegration: null,
    slug: "noop-two",
    id: "aXJpOi8vYXBpcy5xYS5pbmRlZWQubmV0L0VtcGxveWVySW50ZWdyYXRpb24vbm9vcC0yLjA=",
    kind: "ATS_SYNC",
    displayName: "NoOp 2.0",
    content: {
      __typename: "EmployerIntegrationContent",
      backgroundColor: "#000000",
      logoUrl:
        "https://images.ctfassets.net/zxaso63vxv6d/7KvRvRALPwCuZDEJAUheGF/cba9d0d7c3846df822fbb69d12abc4ba/noop-logo-white.svg",
      xmlInstructionsLink: null,
      xmlInstructionsPdf:
        "https://assets.ctfassets.net/zxaso63vxv6d/328v987spBlADdCi8xuOa/e7a5227213ea16894a9da693cc620139/TestInstallPDF.pdf",
      xmlInstructionsContact: null,
      howToInstallLink: null,
      supportLink: null,
      displayName: "NoOp New",
      additionalInfos: [],
    },
    xmlIntegration: {
      __typename: "AtsIntegrationModel",
      remoteKey: "noop-2.0-xml",
      kind: "XML",
      supportedFeatures: ["APPLY_SYNC", "JOB_SYNC"],
      published: "UNRELEASED",
    },
  },
  {
    __typename: "EmployerIntegration",
    apiIntegration: {
      __typename: "AtsIntegrationModel",
      remoteKey: "noop",
      kind: "API",
      supportedFeatures: [
        "APPLY_SYNC",
        "CANDIDATE_SYNC",
        "DISPOSITION_SYNC",
        "JOB_SYNC",
      ],
      published: "UNRELEASED",
    },
    slug: "noopa4",
    id: "aXJpOi8vYXBpcy5xYS5pbmRlZWQubmV0L0VtcGxveWVySW50ZWdyYXRpb24vODUxMTVjYjAtYTY0OS0xMWVkLWFmYTEtMDI0MmFjMTIwMDAy",
    kind: "ATS_SYNC",
    displayName: "NoOp All 4",
    content: {
      __typename: "EmployerIntegrationContent",
      backgroundColor: "#EE99BF",
      logoUrl:
        "https://images.ctfassets.net/zxaso63vxv6d/7KvRvRALPwCuZDEJAUheGF/cba9d0d7c3846df822fbb69d12abc4ba/noop-logo-white.svg",
      xmlInstructionsLink: "https://example.com/noop-full-ats-sync",
      xmlInstructionsPdf: null,
      xmlInstructionsContact: null,
      howToInstallLink: null,
      supportLink: null,
      displayName: "NoOp All 4",
      additionalInfos: [
        {
          __typename: "EmployerIntegrationAdditionalInfoSection",
          sectionHeader: "Employer Help Center",
          links: [
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Search our help resources",
              url: "https://indeed.force.com/employerSupport1/s/?language=en_US",
            },
          ],
        },
        {
          __typename: "EmployerIntegrationAdditionalInfoSection",
          sectionHeader: "Integrations support",
          links: [
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Contact your Indeed representative",
              url: "https://employers.indeed.com/contact_indeed?from=gnav-empcenter",
            },
          ],
        },
        {
          __typename: "EmployerIntegrationAdditionalInfoSection",
          sectionHeader: "Indeed policies",
          links: [
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Terms of Service",
              url: "https://www.qa.indeed.net/legal",
            },
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Privacy Policy",
              url: "https://www.qa.indeed.net/legal?hl=en#privacypolicy",
            },
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Cookie Policy",
              url: "https://hrtechprivacy.com/brands/indeed#Cookies",
            },
          ],
        },
      ],
    },
    xmlIntegration: {
      __typename: "AtsIntegrationModel",
      remoteKey: "noop-xml",
      kind: "XML",
      supportedFeatures: ["APPLY_SYNC", "JOB_SYNC"],
      published: "UNRELEASED",
    },
  },
  {
    __typename: "EmployerIntegration",
    apiIntegration: {
      __typename: "AtsIntegrationModel",
      remoteKey: "noop",
      kind: "API",
      supportedFeatures: ["CANDIDATE_SYNC"],
      published: "UNRELEASED",
    },
    slug: "noopcsonly",
    id: "aXJpOi8vYXBpcy5xYS5pbmRlZWQubmV0L0VtcGxveWVySW50ZWdyYXRpb24vODUxMTYxNjAtYTY0OS0xMWVkLWFmYTEtMDI0MmFjMTIwMDAy",
    kind: "ATS_SYNC",
    displayName: "NoOp CS Only",
    content: {
      __typename: "EmployerIntegrationContent",
      backgroundColor: "#E0A961",
      logoUrl:
        "https://images.ctfassets.net/zxaso63vxv6d/7KvRvRALPwCuZDEJAUheGF/cba9d0d7c3846df822fbb69d12abc4ba/noop-logo-white.svg",
      xmlInstructionsLink: null,
      xmlInstructionsPdf: null,
      xmlInstructionsContact: null,
      howToInstallLink: null,
      supportLink: null,
      displayName: "NoOp CS Only",
      additionalInfos: [
        {
          __typename: "EmployerIntegrationAdditionalInfoSection",
          sectionHeader: "Employer Help Center",
          links: [
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Search our help resources",
              url: "https://indeed.force.com/employerSupport1/s/?language=en_US",
            },
          ],
        },
        {
          __typename: "EmployerIntegrationAdditionalInfoSection",
          sectionHeader: "Integrations support",
          links: [
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Contact your Indeed representative",
              url: "https://employers.indeed.com/contact_indeed?from=gnav-empcenter",
            },
          ],
        },
        {
          __typename: "EmployerIntegrationAdditionalInfoSection",
          sectionHeader: "Indeed policies",
          links: [
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Terms of Service",
              url: "https://www.qa.indeed.net/legal",
            },
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Privacy Policy",
              url: "https://www.qa.indeed.net/legal?hl=en#privacypolicy",
            },
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Cookie Policy",
              url: "https://hrtechprivacy.com/brands/indeed#Cookies",
            },
          ],
        },
      ],
    },
    xmlIntegration: null,
  },
  {
    __typename: "EmployerIntegration",
    apiIntegration: {
      __typename: "AtsIntegrationModel",
      remoteKey: "noop",
      kind: "API",
      supportedFeatures: ["CANDIDATE_SYNC"],
      published: "UNRELEASED",
    },
    slug: "noopcswxml",
    id: "aXJpOi8vYXBpcy5xYS5pbmRlZWQubmV0L0VtcGxveWVySW50ZWdyYXRpb24vODUxMTYyYzgtYTY0OS0xMWVkLWFmYTEtMDI0MmFjMTIwMDAy",
    kind: "ATS_SYNC",
    displayName: "NoOp CS With XML",
    content: {
      __typename: "EmployerIntegrationContent",
      backgroundColor: "#4ca38f",
      logoUrl:
        "https://images.ctfassets.net/zxaso63vxv6d/7KvRvRALPwCuZDEJAUheGF/cba9d0d7c3846df822fbb69d12abc4ba/noop-logo-white.svg",
      xmlInstructionsLink: "https://example.com/xml-install-instructions",
      xmlInstructionsPdf: null,
      xmlInstructionsContact: {
        __typename: "EmployerIntegrationInstructionsContact",
        description:
          "Contact your ATS customer support team to learn about syncing your NoOp jobs and applications with Indeed.",
        contactEmails: ["support@example.com"],
        contactPhoneNumbers: ["(512) 555-1234"],
        getHelpOnlineLink: {
          __typename: "EmployerIntegrationLink",
          url: "https://example.com/xml-only-help-online",
        },
        contactLinks: [],
      },
      howToInstallLink: null,
      supportLink: null,
      displayName: "Noop CS With XML",
      additionalInfos: [
        {
          __typename: "EmployerIntegrationAdditionalInfoSection",
          sectionHeader: "Integrations support",
          links: [
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Contact your Indeed representative",
              url: "https://employers.indeed.com/contact_indeed?from=gnav-empcenter",
            },
          ],
        },
        {
          __typename: "EmployerIntegrationAdditionalInfoSection",
          sectionHeader: "Indeed policies",
          links: [
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Terms of Service",
              url: "https://www.qa.indeed.net/legal",
            },
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Privacy Policy",
              url: "https://www.qa.indeed.net/legal?hl=en#privacypolicy",
            },
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Cookie Policy",
              url: "https://hrtechprivacy.com/brands/indeed#Cookies",
            },
          ],
        },
      ],
    },
    xmlIntegration: {
      __typename: "AtsIntegrationModel",
      remoteKey: "noop-xml",
      kind: "XML",
      supportedFeatures: ["APPLY_SYNC", "JOB_SYNC"],
      published: "UNRELEASED",
    },
  },
  {
    __typename: "EmployerIntegration",
    apiIntegration: null,
    slug: "noop-learn-more",
    id: "aXJpOi8vYXBpcy5xYS5pbmRlZWQubmV0L0VtcGxveWVySW50ZWdyYXRpb24vbm9vcC1sZWFybi1tb3Jl",
    kind: "ATS_SYNC",
    displayName: "NoOp w/ Learn More",
    content: {
      __typename: "EmployerIntegrationContent",
      backgroundColor: "#f39e78",
      logoUrl:
        "https://images.ctfassets.net/zxaso63vxv6d/7KvRvRALPwCuZDEJAUheGF/cba9d0d7c3846df822fbb69d12abc4ba/noop-logo-white.svg",
      xmlInstructionsLink: null,
      xmlInstructionsPdf: null,
      xmlInstructionsContact: {
        __typename: "EmployerIntegrationInstructionsContact",
        description:
          "Contact your ATS customer support team to learn about syncing your jobs and applications with Indeed.",
        contactEmails: ["support@example.com", "contact@example.com"],
        contactPhoneNumbers: ["(832) 528-5234"],
        getHelpOnlineLink: {
          __typename: "EmployerIntegrationLink",
          url: "https://example.com/get-help-ats",
        },
        contactLinks: [
          {
            __typename: "EmployerIntegrationLink",
            linkText: "More Help Here",
            url: "https://example.com/more-help",
          },
          {
            __typename: "EmployerIntegrationLink",
            linkText: "ATS Admin Portal",
            url: "https://example.com/ats-admin-portal",
          },
        ],
      },
      howToInstallLink: null,
      supportLink: null,
      displayName: "NoOp with Learn More",
      additionalInfos: [],
    },
    xmlIntegration: {
      __typename: "AtsIntegrationModel",
      remoteKey: "noop-learn-more-xml",
      kind: "XML",
      supportedFeatures: ["APPLY_SYNC", "JOB_SYNC"],
      published: "UNRELEASED",
    },
  },
  {
    __typename: "EmployerIntegration",
    apiIntegration: null,
    slug: "noopxmlonly",
    id: "aXJpOi8vYXBpcy5xYS5pbmRlZWQubmV0L0VtcGxveWVySW50ZWdyYXRpb24vODUxMTYzZmUtYTY0OS0xMWVkLWFmYTEtMDI0MmFjMTIwMDAy",
    kind: "ATS_SYNC",
    displayName: "NoOp XML Only",
    content: {
      __typename: "EmployerIntegrationContent",
      backgroundColor: "#9288EE",
      logoUrl:
        "https://images.ctfassets.net/zxaso63vxv6d/7KvRvRALPwCuZDEJAUheGF/cba9d0d7c3846df822fbb69d12abc4ba/noop-logo-white.svg",
      xmlInstructionsLink: "https://example.com/noop-xml-instructions",
      xmlInstructionsPdf:
        "https://assets.ctfassets.net/zxaso63vxv6d/328v987spBlADdCi8xuOa/e7a5227213ea16894a9da693cc620139/TestInstallPDF.pdf",
      xmlInstructionsContact: null,
      howToInstallLink: null,
      supportLink: null,
      displayName: "NoOp - XML",
      additionalInfos: [
        {
          __typename: "EmployerIntegrationAdditionalInfoSection",
          sectionHeader: "Employer Help Center",
          links: [
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Search our help resources",
              url: "https://indeed.force.com/employerSupport1/s/?language=en_US",
            },
          ],
        },
        {
          __typename: "EmployerIntegrationAdditionalInfoSection",
          sectionHeader: "Integrations support",
          links: [
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Contact your Indeed representative",
              url: "https://employers.indeed.com/contact_indeed?from=gnav-empcenter",
            },
          ],
        },
        {
          __typename: "EmployerIntegrationAdditionalInfoSection",
          sectionHeader: "Indeed policies",
          links: [
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Terms of Service",
              url: "https://www.qa.indeed.net/legal",
            },
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Privacy Policy",
              url: "https://www.qa.indeed.net/legal?hl=en#privacypolicy",
            },
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Cookie Policy",
              url: "https://hrtechprivacy.com/brands/indeed#Cookies",
            },
          ],
        },
      ],
    },
    xmlIntegration: {
      __typename: "AtsIntegrationModel",
      remoteKey: "noop-xml",
      kind: "XML",
      supportedFeatures: ["APPLY_SYNC", "JOB_SYNC"],
      published: "UNRELEASED",
    },
  },
  {
    __typename: "EmployerIntegration",
    apiIntegration: {
      __typename: "AtsIntegrationModel",
      remoteKey: "phenom",
      kind: "API",
      supportedFeatures: ["CANDIDATE_SYNC"],
      published: "UNRELEASED",
    },
    slug: "phenom-people",
    id: "aXJpOi8vYXBpcy5xYS5pbmRlZWQubmV0L0VtcGxveWVySW50ZWdyYXRpb24vYWJhMmI0MDktMDU1NS00NTg5LThkMjUtYmMzOGZiOWM5OTQy",
    kind: "ATS_SYNC",
    displayName: "Phenom People",
    content: {
      __typename: "EmployerIntegrationContent",
      backgroundColor: "#00A9B7",
      logoUrl:
        "https://images.ctfassets.net/zxaso63vxv6d/5YAPbtHbAgoqSbwtvr0aqB/0a1b34138adb0afa1b2779a8a5f0ba2c/phenom-logo-white.svg",
      xmlInstructionsLink: null,
      xmlInstructionsPdf: null,
      xmlInstructionsContact: null,
      howToInstallLink: null,
      supportLink: null,
      displayName: "Phenom People",
      additionalInfos: [
        {
          __typename: "EmployerIntegrationAdditionalInfoSection",
          sectionHeader: "Integrations support",
          links: [
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Contact your Indeed representative",
              url: "https://employers.indeed.com/contact_indeed?from=gnav-empcenter",
            },
          ],
        },
        {
          __typename: "EmployerIntegrationAdditionalInfoSection",
          sectionHeader: "Employer Help Center",
          links: [
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Search our help resources",
              url: "https://indeed.force.com/employerSupport1/s/?language=en_US",
            },
          ],
        },
        {
          __typename: "EmployerIntegrationAdditionalInfoSection",
          sectionHeader: "Indeed policies",
          links: [
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Terms of Service",
              url: "https://www.qa.indeed.net/legal",
            },
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Privacy Policy",
              url: "https://www.qa.indeed.net/legal?hl=en#privacypolicy",
            },
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Cookie Policy",
              url: "https://hrtechprivacy.com/brands/indeed#Cookies",
            },
          ],
        },
      ],
    },
    xmlIntegration: null,
  },
  {
    __typename: "EmployerIntegration",
    apiIntegration: {
      __typename: "AtsIntegrationModel",
      remoteKey: "recruitee",
      kind: "API",
      supportedFeatures: ["JOB_SYNC"],
      published: "UNRELEASED",
    },
    slug: "recruitee",
    id: "aXJpOi8vYXBpcy5xYS5pbmRlZWQubmV0L0VtcGxveWVySW50ZWdyYXRpb24vY2VjN2YxZmMtMzQ4Ny1hYmNkLTM0ODctNzQwMWM3YjgwMzk5",
    kind: "ATS_SYNC",
    displayName: "Recruitee",
    content: {
      __typename: "EmployerIntegrationContent",
      backgroundColor: "#1999E3",
      logoUrl:
        "https://images.ctfassets.net/zxaso63vxv6d/5CnpIzdAycsUCPdI25tVUS/b3f8fe700d996a5d8dafd98f8c65b14f/recruitee-emblem.svg",
      xmlInstructionsLink: null,
      xmlInstructionsPdf: null,
      xmlInstructionsContact: null,
      howToInstallLink: null,
      supportLink: null,
      displayName: "Recruitee",
      additionalInfos: [
        {
          __typename: "EmployerIntegrationAdditionalInfoSection",
          sectionHeader: "Integrations support",
          links: [
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Contact your Indeed representative",
              url: "https://employers.indeed.com/contact_indeed?from=gnav-empcenter",
            },
          ],
        },
        {
          __typename: "EmployerIntegrationAdditionalInfoSection",
          sectionHeader: "Employer Help Center",
          links: [
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Search our help resources",
              url: "https://indeed.force.com/employerSupport1/s/?language=en_US",
            },
          ],
        },
        {
          __typename: "EmployerIntegrationAdditionalInfoSection",
          sectionHeader: "Indeed policies",
          links: [
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Terms of Service",
              url: "https://www.qa.indeed.net/legal",
            },
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Privacy Policy",
              url: "https://www.qa.indeed.net/legal?hl=en#privacypolicy",
            },
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Cookie Policy",
              url: "https://hrtechprivacy.com/brands/indeed#Cookies",
            },
          ],
        },
      ],
    },
    xmlIntegration: null,
  },
  {
    __typename: "EmployerIntegration",
    apiIntegration: null,
    slug: "sap-success-factors",
    id: "aXJpOi8vYXBpcy5xYS5pbmRlZWQubmV0L0VtcGxveWVySW50ZWdyYXRpb24vZjg2YjllMzEtMDliYi00MDIyLWJiNWItMTNiN2ZjMDVhNmU1",
    kind: "ATS_SYNC",
    displayName: "SAP SuccessFactors",
    content: {
      __typename: "EmployerIntegrationContent",
      backgroundColor: "#007DB8",
      logoUrl:
        "https://images.ctfassets.net/zxaso63vxv6d/7gpZhrmJc3oGRRjyiwZ7Fw/64b157e2ca866f5e8eeae7da2b7937b6/sap-white-logo.svg",
      xmlInstructionsLink: null,
      xmlInstructionsPdf: null,
      xmlInstructionsContact: null,
      howToInstallLink: null,
      supportLink: null,
      displayName: "SAP SuccessFactors",
      additionalInfos: [
        {
          __typename: "EmployerIntegrationAdditionalInfoSection",
          sectionHeader: "Integrations support",
          links: [
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Contact your Indeed representative",
              url: "https://employers.indeed.com/contact_indeed?from=gnav-empcenter",
            },
          ],
        },
        {
          __typename: "EmployerIntegrationAdditionalInfoSection",
          sectionHeader: "Employer Help Center",
          links: [
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Search our help resources",
              url: "https://indeed.force.com/employerSupport1/s/?language=en_US",
            },
          ],
        },
        {
          __typename: "EmployerIntegrationAdditionalInfoSection",
          sectionHeader: "Indeed policies",
          links: [
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Terms of Service",
              url: "https://www.qa.indeed.net/legal",
            },
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Privacy Policy",
              url: "https://www.qa.indeed.net/legal?hl=en#privacypolicy",
            },
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Cookie Policy",
              url: "https://hrtechprivacy.com/brands/indeed#Cookies",
            },
          ],
        },
      ],
    },
    xmlIntegration: {
      __typename: "AtsIntegrationModel",
      remoteKey: "sap-success-factors-xml",
      kind: "XML",
      supportedFeatures: ["APPLY_SYNC", "JOB_SYNC"],
      published: "UNRELEASED",
    },
  },
  {
    __typename: "EmployerIntegration",
    apiIntegration: {
      __typename: "AtsIntegrationModel",
      remoteKey: "smartrecruiters",
      kind: "API",
      supportedFeatures: ["CANDIDATE_SYNC"],
      published: "UNRELEASED",
    },
    slug: "smart-recruiters",
    id: "aXJpOi8vYXBpcy5xYS5pbmRlZWQubmV0L0VtcGxveWVySW50ZWdyYXRpb24vc21hcnRyZWNydWl0ZXJz",
    kind: "ATS_SYNC",
    displayName: "SmartRecruiters",
    content: {
      __typename: "EmployerIntegrationContent",
      backgroundColor: "#FFFFFF",
      logoUrl:
        "https://images.ctfassets.net/zxaso63vxv6d/21ESz3gOQxGF1pyFN18EAi/96b3ca953e2d17d5591fe468e6eefb5f/smartrecruiters_icon.png",
      xmlInstructionsLink: null,
      xmlInstructionsPdf: null,
      xmlInstructionsContact: null,
      howToInstallLink: null,
      supportLink: null,
      displayName: "SmartRecruiters",
      additionalInfos: [],
    },
    xmlIntegration: null,
  },
  {
    __typename: "EmployerIntegration",
    apiIntegration: null,
    slug: "talentlink",
    id: "aXJpOi8vYXBpcy5xYS5pbmRlZWQubmV0L0VtcGxveWVySW50ZWdyYXRpb24vMGVjMzljNDktNmE3ZC00ZDY3LThlNmEtZDg1MmMyY2YxNzgy",
    kind: "ATS_SYNC",
    displayName: "Talentlink",
    content: {
      __typename: "EmployerIntegrationContent",
      backgroundColor: "#FFFFFF",
      logoUrl:
        "https://images.ctfassets.net/zxaso63vxv6d/5qmLAcc7IlwAkLDTBXXuQL/cc6b5bf30117c25b0d4b80a355f563fb/talentlink-logo.png",
      xmlInstructionsLink: null,
      xmlInstructionsPdf: null,
      xmlInstructionsContact: null,
      howToInstallLink: null,
      supportLink: null,
      displayName: "TalentLink",
      additionalInfos: [
        {
          __typename: "EmployerIntegrationAdditionalInfoSection",
          sectionHeader: "Integrations support",
          links: [
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Contact your Indeed representative",
              url: "https://employers.indeed.com/contact_indeed?from=gnav-empcenter",
            },
          ],
        },
        {
          __typename: "EmployerIntegrationAdditionalInfoSection",
          sectionHeader: "Employer Help Center",
          links: [
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Search our help resources",
              url: "https://indeed.force.com/employerSupport1/s/?language=en_US",
            },
          ],
        },
        {
          __typename: "EmployerIntegrationAdditionalInfoSection",
          sectionHeader: "Indeed policies",
          links: [
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Terms of Service",
              url: "https://www.qa.indeed.net/legal",
            },
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Privacy Policy",
              url: "https://www.qa.indeed.net/legal?hl=en#privacypolicy",
            },
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Cookie Policy",
              url: "https://hrtechprivacy.com/brands/indeed#Cookies",
            },
          ],
        },
      ],
    },
    xmlIntegration: {
      __typename: "AtsIntegrationModel",
      remoteKey: "talentlink-xml",
      kind: "XML",
      supportedFeatures: ["APPLY_SYNC", "JOB_SYNC"],
      published: "UNRELEASED",
    },
  },
  {
    __typename: "EmployerIntegration",
    apiIntegration: {
      __typename: "AtsIntegrationModel",
      remoteKey: "talentreef",
      kind: "API",
      supportedFeatures: ["CANDIDATE_SYNC"],
      published: "ALPHA",
    },
    slug: "talentreef",
    id: "aXJpOi8vYXBpcy5xYS5pbmRlZWQubmV0L0VtcGxveWVySW50ZWdyYXRpb24vMjY5ZGJlMTUtNDQ3OS00MGI2LWE5NzktOTgyYmZhZDU4YmFh",
    kind: "ATS_SYNC",
    displayName: "Talentreef",
    content: {
      __typename: "EmployerIntegrationContent",
      backgroundColor: "#FFFFFF",
      logoUrl:
        "https://images.ctfassets.net/zxaso63vxv6d/2Z3rkr7A5TINs9eLiq0uo1/9bafd7a410f5947a4aad2dfbf65eb1f8/talentreef-logo.png",
      xmlInstructionsLink: null,
      xmlInstructionsPdf: null,
      xmlInstructionsContact: {
        __typename: "EmployerIntegrationInstructionsContact",
        description:
          "Contact your ATS customer support team to learn about syncing your jobs and applications with Indeed.",
        contactEmails: [],
        contactPhoneNumbers: [],
        getHelpOnlineLink: {
          __typename: "EmployerIntegrationLink",
          url: "https://www.talentreef.com/about/support/",
        },
        contactLinks: [],
      },
      howToInstallLink: null,
      supportLink: null,
      displayName: "TalentReef",
      additionalInfos: [
        {
          __typename: "EmployerIntegrationAdditionalInfoSection",
          sectionHeader: "Documentation",
          links: [
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Indeed API installation",
              url: "https://developer.indeed.com/docs/install-guides/talentreef",
            },
          ],
        },
        {
          __typename: "EmployerIntegrationAdditionalInfoSection",
          sectionHeader: "Integrations support",
          links: [
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Contact your Indeed representative",
              url: "https://employers.indeed.com/contact_indeed?from=gnav-empcenter",
            },
          ],
        },
        {
          __typename: "EmployerIntegrationAdditionalInfoSection",
          sectionHeader: "Employer Help Center",
          links: [
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Search our help resources",
              url: "https://indeed.force.com/employerSupport1/s/?language=en_US",
            },
          ],
        },
        {
          __typename: "EmployerIntegrationAdditionalInfoSection",
          sectionHeader: "Indeed policies",
          links: [
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Terms of Service",
              url: "https://www.qa.indeed.net/legal",
            },
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Privacy Policy",
              url: "https://www.qa.indeed.net/legal?hl=en#privacypolicy",
            },
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Cookie Policy",
              url: "https://hrtechprivacy.com/brands/indeed#Cookies",
            },
          ],
        },
      ],
    },
    xmlIntegration: {
      __typename: "AtsIntegrationModel",
      remoteKey: "talentreef-xml",
      kind: "XML",
      supportedFeatures: ["APPLY_SYNC", "JOB_SYNC"],
      published: "PUBLIC",
    },
  },
  {
    __typename: "EmployerIntegration",
    apiIntegration: {
      __typename: "AtsIntegrationModel",
      remoteKey: "talentsoft",
      kind: "API",
      supportedFeatures: ["CANDIDATE_SYNC"],
      published: "UNRELEASED",
    },
    slug: "talentsoft",
    id: "aXJpOi8vYXBpcy5xYS5pbmRlZWQubmV0L0VtcGxveWVySW50ZWdyYXRpb24vY2VjN2YxZmMtMzQ4Ny00MDBmLWE0Y2MtNzQwMWM3YjgwMzF0",
    kind: "ATS_SYNC",
    displayName: "Talentsoft",
    content: {
      __typename: "EmployerIntegrationContent",
      backgroundColor: "#003C71",
      logoUrl:
        "https://images.ctfassets.net/zxaso63vxv6d/3SALC8jat7vVeXSXVRBxZv/3cc7d9b21afadf8892fe5e9ab123bb33/talentsoft-logo-white.svg",
      xmlInstructionsLink: null,
      xmlInstructionsPdf: null,
      xmlInstructionsContact: null,
      howToInstallLink: null,
      supportLink: null,
      displayName: "Talentsoft",
      additionalInfos: [
        {
          __typename: "EmployerIntegrationAdditionalInfoSection",
          sectionHeader: "Integrations support",
          links: [
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Contact your Indeed representative",
              url: "https://employers.indeed.com/contact_indeed?from=gnav-empcenter",
            },
          ],
        },
        {
          __typename: "EmployerIntegrationAdditionalInfoSection",
          sectionHeader: "Employer Help Center",
          links: [
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Search our help resources",
              url: "https://indeed.force.com/employerSupport1/s/?language=en_US",
            },
          ],
        },
        {
          __typename: "EmployerIntegrationAdditionalInfoSection",
          sectionHeader: "Indeed policies",
          links: [
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Terms of Service",
              url: "https://www.qa.indeed.net/legal",
            },
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Privacy Policy",
              url: "https://www.qa.indeed.net/legal?hl=en#privacypolicy",
            },
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Cookie Policy",
              url: "https://hrtechprivacy.com/brands/indeed#Cookies",
            },
          ],
        },
      ],
    },
    xmlIntegration: null,
  },
  {
    __typename: "EmployerIntegration",
    apiIntegration: {
      __typename: "AtsIntegrationModel",
      remoteKey: "workable",
      kind: "API",
      supportedFeatures: ["CANDIDATE_SYNC"],
      published: "ALPHA",
    },
    slug: "workable",
    id: "aXJpOi8vYXBpcy5xYS5pbmRlZWQubmV0L0VtcGxveWVySW50ZWdyYXRpb24vNjliZmE0YjYtMjBlMy00MzY0LWJhOGItOTAyOWVhMzE1YTJi",
    kind: "ATS_SYNC",
    displayName: "Workable",
    content: {
      __typename: "EmployerIntegrationContent",
      backgroundColor: "#33B5CB",
      logoUrl:
        "https://images.ctfassets.net/zxaso63vxv6d/2mROxDLtqoirMcJlFy6C4f/6e4d4dfcac63b43dcb23c787b744631a/workable-emblem.svg",
      xmlInstructionsLink: null,
      xmlInstructionsPdf: null,
      xmlInstructionsContact: null,
      howToInstallLink: null,
      supportLink: null,
      displayName: "Workable",
      additionalInfos: [
        {
          __typename: "EmployerIntegrationAdditionalInfoSection",
          sectionHeader: "Documentation",
          links: [
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Indeed API installation",
              url: "https://developer.indeed.com/docs/install-guides/workable",
            },
          ],
        },
        {
          __typename: "EmployerIntegrationAdditionalInfoSection",
          sectionHeader: "Integrations support",
          links: [
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Contact your Indeed representative",
              url: "https://employers.indeed.com/contact_indeed?from=gnav-empcenter",
            },
          ],
        },
        {
          __typename: "EmployerIntegrationAdditionalInfoSection",
          sectionHeader: "Employer Help Center",
          links: [
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Search our help resources",
              url: "https://indeed.force.com/employerSupport1/s/?language=en_US",
            },
          ],
        },
        {
          __typename: "EmployerIntegrationAdditionalInfoSection",
          sectionHeader: "Indeed policies",
          links: [
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Terms of Service",
              url: "https://www.qa.indeed.net/legal",
            },
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Privacy Policy",
              url: "https://www.qa.indeed.net/legal?hl=en#privacypolicy",
            },
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Cookie Policy",
              url: "https://hrtechprivacy.com/brands/indeed#Cookies",
            },
          ],
        },
      ],
    },
    xmlIntegration: null,
  },
  {
    __typename: "EmployerIntegration",
    apiIntegration: {
      __typename: "AtsIntegrationModel",
      remoteKey: "workday",
      kind: "API",
      supportedFeatures: ["CANDIDATE_SYNC"],
      published: "ALPHA",
    },
    slug: "workday",
    id: "aXJpOi8vYXBpcy5xYS5pbmRlZWQubmV0L0VtcGxveWVySW50ZWdyYXRpb24vNmQyMjI0ZjUtYTY2OS00MDFkLThiMWUtNGJmNDU5ZjNiYmJk",
    kind: "ATS_SYNC",
    displayName: "Workday",
    content: {
      __typename: "EmployerIntegrationContent",
      backgroundColor: "#0064A8",
      logoUrl:
        "https://images.ctfassets.net/zxaso63vxv6d/7hft81Ilx4hO6bW7dQ28yo/a04cae14f8d9106a17100e203fecc6f1/workday-emblem-reversed.svg",
      xmlInstructionsLink: null,
      xmlInstructionsPdf: null,
      xmlInstructionsContact: null,
      howToInstallLink: null,
      supportLink: null,
      displayName: "Workday",
      additionalInfos: [
        {
          __typename: "EmployerIntegrationAdditionalInfoSection",
          sectionHeader: "Documentation",
          links: [
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Indeed API installation",
              url: "https://developer.indeed.com/docs/workday/config",
            },
          ],
        },
        {
          __typename: "EmployerIntegrationAdditionalInfoSection",
          sectionHeader: "Integrations support",
          links: [
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Contact your Indeed representative",
              url: "https://employers.indeed.com/contact_indeed?from=gnav-empcenter",
            },
          ],
        },
        {
          __typename: "EmployerIntegrationAdditionalInfoSection",
          sectionHeader: "Employer Help Center",
          links: [
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Search our help resources",
              url: "https://indeed.force.com/employerSupport1/s/?language=en_US",
            },
          ],
        },
        {
          __typename: "EmployerIntegrationAdditionalInfoSection",
          sectionHeader: "Indeed policies",
          links: [
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Terms of Service",
              url: "https://www.qa.indeed.net/legal",
            },
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Privacy Policy",
              url: "https://www.qa.indeed.net/legal?hl=en#privacypolicy",
            },
            {
              __typename: "EmployerIntegrationLink",
              linkText: "Cookie Policy",
              url: "https://hrtechprivacy.com/brands/indeed#Cookies",
            },
          ],
        },
      ],
    },
    xmlIntegration: null,
  },
];