import { TranslationMessages } from "ra-core";
import englishMessages from "ra-language-english";

const customEnglishMessages: TranslationMessages = {
  ...englishMessages,
  pos: {
    search: "Search",
    configuration: "Configuration",
    language: "Language",
    theme: {
      name: "Theme",
      light: "Light",
      dark: "Dark",
    },
    dashboard: {
      monthly_revenue: "Monthly Revenue",
      new_orders: "New Orders",
      pending_reviews: "Pending Reviews",
      new_customers: "New Customers",
      pending_orders: "Pending Orders",
      order: {
        items:
          "by %{customer_name}, one item |||| by %{customer_name}, %{nb_items} items",
      },
      welcome: {
        title: "Welcome to react-admin demo",
        subtitle:
          "This is the admin of an imaginary poster shop. Feel free to explore and modify the data - it's local to your computer, and will reset each time you reload.",
        aor_button: "react-admin site",
        demo_button: "Source for this demo",
      },
    },
    menu: {
      sales: "Sales",
      catalog: "Catalog",
      customers: "Customers",
    },
  },
  resources: {
    users: {
      name: "Customer |||| Customers",
      fields: {
        commands: "Orders",
        first_seen: "First seen",
        groups: "Segments",
        last_seen: "Last seen",
        last_seen_gte: "Visited Since",
        name: "Name",
        total_spent: "Total spent",
        password: "Password",
        confirm_password: "Confirm password",
      },
      fieldGroups: {
        identity: "Identity",
        address: "Address",
        stats: "Stats",
        history: "History",
        password: "Password",
        change_password: "Change Password",
      },
      page: {
        delete: "Delete Customer",
      },
      errors: {
        password_mismatch:
          "The password confirmation is not the same as the password.",
      },
    },
    factchecks: {
      name: "Order |||| Orders",
      amount: "1 order |||| %{smart_count} orders",
      title: "Fact Check %{reference}",
      fields: {
        basket: {
          delivery: "Delivery",
          reference: "Reference",
          quantity: "Quantity",
          sum: "Sum",
          tax_rate: "Tax Rate",
          total: "Total",
          unit_price: "Unit Price",
        },
        customer_id: "Customer",
        date_gte: "Passed Since",
        date_lte: "Passed Before",
        total_gte: "Min amount",
        status: "Status",
        returned: "Returned",
      },
    },
    categories: {
      name: "Category |||| Categories",
      fields: {
        products: "Products",
      },
    },
    news: {
      name: "Information |||| Informations",
      amount: "1 Information |||| %{smart_count} Informations",
      relative_to_poster: "Information on poster",
      detail: "Information detail",
      fields: {
        customer_id: "Customer",
        command_id: "Order",
        product_id: "Product",
        date_gte: "Posted since",
        date_lte: "Posted before",
        date: "Date",
        comment: "Comment",
        rating: "Rating",
      },
      action: {
        accept: "Accept",
        reject: "Reject",
        true: "True",
        false: "False",
      },
      notification: {
        approved_success: "Information approved",
        approved_error: "Error: Information not approved",
        rejected_success: "Information rejected",
        rejected_error: "Error: Information not rejected",
      },
    },
  },
};

export default customEnglishMessages;
