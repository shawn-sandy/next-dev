import React from "react";

const IntegrationGroupedByLetter = ({ integrations }) => {
  const groupedIntegrations = integrations.reduce((acc, integration) => {
    const firstLetter = integration.displayName.charAt(0).toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [integration];
    } else {
      acc[firstLetter].push(integration);
    }
    return acc;
  }, {});

  return (
    <div>
      {Object.entries(groupedIntegrations).map(([letter, integrations]) => (
        <div key={letter}>
          <h2>{letter}</h2>
          <ul>
            {integrations.map((integration) => (
              <li key={integration.id}>
                <div>{integration.displayName}</div>
                {integration.content && (
                  <div>
                    <div>
                      Background Color: {integration.content.backgroundColor}
                    </div>
                    <div>Logo URL: {integration.content.logoUrl}</div>
                    {integration.content.additionalInfos.map((infoSection) => (
                      <div key={infoSection.sectionHeader}>
                        <h3>{infoSection.sectionHeader}</h3>
                        <ul>
                          {infoSection.links.map((link) => (
                            <li key={link.url}>
                              <a
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {link.linkText}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default IntegrationGroupedByLetter;

import { integrations } from "./demoData";

export const Integrations = () => (
  <IntegrationGroupedByLetter integrations={integrations} />
);
