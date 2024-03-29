const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Index.vue") }],
  },
  {
    path: "/sap-vadodara",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/sap-vadodara.vue") }],
  },
  {
    path: "/sap-ahmedabad",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/sap-ahmedabad.vue") },
    ],
  },
  {
    path: "/sap-mumbai",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/sap-mumbai.vue") }],
  },
  {
    path: "/sap-b1-surat",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/sap-b1-surat.vue") }],
  },
  {
    path: "/sap-b1-bangalore",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("src/pages/sap-b1-bangalore.vue") },
    ],
  },
  {
    path: "/sap-business-one",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/sap-business-one.vue") },
    ],
  },
  {
    path: "/sap-business-one-on-cloud",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/sap-business-one-on-cloud.vue"),
      },
    ],
  },
  {
    path: "/sap-business-one-on-hana",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/sap-business-one-on-hana.vue"),
      },
    ],
  },
  {
    path: "/sap-s4-hana",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/sap-s4-hana.vue") }],
  },
  {
    path: "/sap-s4-hana-on-cloud",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/sap-s4-hana-on-cloud.vue") },
    ],
  },
  {
    path: "/about-us",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/about-us.vue") }],
  },
  {
    path: "/sap-business-one-addon",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/sap-business-one-addon.vue") },
    ],
  },
  {
    path: "/web-development",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/web-development.vue") },
    ],
  },
  {
    path: "/crm-development",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/crm-development.vue") },
    ],
  },
  {
    path: "/contact-us",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/contact-us.vue") }],
  },
  {
    path: "/mobile-app-development",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/mobile-app-development.vue") },
    ],
  },
  {
    path: "/ecommerce-store-development",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/ecommerce-store-development.vue"),
      },
    ],
  },
  {
    path: "/customize-erp",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/customize-erp.vue") },
    ],
  },
  {
    path: "/sap-traning",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/sap-traning.vue") }],
  },
  {
    path: "/machine-learning-traning",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/machine-learning-traning.vue"),
      },
    ],
  },
  {
    path: "/python-traning",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/python-traning.vue") },
    ],
  },
  {
    path: "/placement-service",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/placement-service.vue") },
    ],
  },
  {
    path: "/einvoice-ewaybill-solution",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/einvoice-ewaybill-solution.vue"),
      },
    ],
  },
  // {
  //   path: "/digital-signature",
  //   component: () => import("layouts/MainLayout.vue"),
  //   children: [
  //     { path: "", component: () => import("pages/digital-signature.vue") },
  //   ],
  // },

  // test route for page replacement
  {
    path: "/digital-signature",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/digital-signature-2.vue") },
    ],
  },
  {
    path: "/quality-control-system",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/quality-control-system.vue") },
    ],
  },
  {
    path: "/career-at-quantum",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/career-at-quantum.vue") },
    ],
  },
  {
    path: "/dashboard",
    component: () => import("layouts/sublayout.vue"),
    meta: { requiresAuth: true },
    children: [{ path: "", component: () => import("pages/dashboard.vue") }],
  },
  {
    path: "/jobpost",
    component: () => import("layouts/sublayout.vue"),
    meta: { requiresAuth: true },
    children: [{ path: "", component: () => import("pages/jobpost.vue") }],
  },

  // Added for pdf signing
  {
    path: "/qd-pdf-signer",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/qd-pdf-signer.vue") },
    ],
  },
  // Added for QD digital signature
  {
    path: "/qd-digital_signature",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/qd-digital_signature") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/auth",
    component: () => import("pages/auth.vue"),
  },
  {
    path: "*",
    component: () => import("pages/working-on-it.vue"),
  },
];

export default routes;
