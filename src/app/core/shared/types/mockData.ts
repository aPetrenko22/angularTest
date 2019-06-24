export interface MockData {
  id: string;
  type: string;
  links: {
    self: string;
  };
  attributes: {
    urn: string;
    created_at: string;
    updated_at: string;
    content: string;
    properties: string | null;
    display_properties: {
      type: string;
      image: string;
    };
  };
  relationships: {
    authors: {
      links: {
        self: string;
        related: string;
      };
    };
    publishers: {
      links: {
        self: string;
        related: string;
      };
    };
  };
}

export interface SerialisedMockData {
  attributes_content?: string;
  attributes_created_at?: string;
  attributes_display_properties_image?: string;
  attributes_display_properties_type?: string;
  attributes_properties?: string | null;
  attributes_updated_at?: string;
  attributes_urn?: string;
  id: string;
  links_self?: string;
  relationships_authors_links_related?: string;
  relationships_authors_links_self?: string;
  relationships_publishers_links_related?: string;
  relationships_publishers_links_self?: string;
  type: string;
}
