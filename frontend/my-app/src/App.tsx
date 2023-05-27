import { useState } from "react"
import "./App.css"
import { Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"

function App() {
  return (
    <div
      className="pageContainer"
      id="pageContainer"
      style={{ height: "100%" }}
    >
      <div className="pageHeader" ref={pageHeaderRef}>
        <NavBar />
      </div>
      <div className="pageContent" ref={pageContentRef}>
        <Routes>
          {showPages.includes("landingPage") && (
            <Route path="/" element={<LandingPage />} />
          )}
          {showPages.includes("checkout") && (
            <>
              <Route
                path="/checkout/paymentfailure"
                element={<PaymentFailed />}
              />
              <Route path="/checkout/success" element={<CheckoutSuccess />} />
              <Route path="/checkout/*" element={<Checkout />} />
            </>
          )}
          {showPages.includes("user") && (
            <Route path="/user" element={<UserProfile />} />
          )}
          {showPages.includes("marketPlace") && (
            <>
              <Route
                path={!showPages.includes("landingPage") ? "/" : "/marketplace"}
                element={<Navigate to="/marketplace/products" />}
              />

              <Route path="/marketplace/*" element={<ProductList />} />
            </>
          )}
          {showPages.includes("collections") && (
            <>
              <Route
                path="/collections"
                element={<Navigate to="/collections/products" />}
              />
              <Route path="/collections/*" element={<Collections />} />
            </>
          )}
          {showPages.includes("blanktSpecific") && (
            <>
              <Route
                path="/terms-and-conditions"
                element={<TermsAndConditions />}
              />
              <Route path="/cookie-policy" element={<CookiePolicy />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route
                path="/learn/*"
                element={<Navigate to="/learn/inspiration" />}
              />
              <Route path="/learn/inspiration" element={<Inspiration />} />
              <Route
                path="/learn/inspiration/:articleId"
                element={<ArticlePage />}
              />
              <Route
                path="/collections/collection-product-item"
                element={<CollectionItem />}
              />
              <Route path="/popular" element={<Popular />} />
              <Route path="/creators" element={<Creators />} />
              <Route path="/likes" element={<Navigate to="/likes" />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/pr-mentions" element={<PRMentions />} />
              <Route path="/career" element={<Career />} />
              <Route path="/sustainability" element={<Sustainability />} />
              <Route path="/giftcards" element={<GiftCards />} />
            </>
          )}
          <Route path="/notfound" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/notfound" />} />
        </Routes>
      </div>
      {!shouldHideFooter() && (
        <>
          <div className="pageFooter">
            <Footer />
          </div>
          {/* <ScrollButton
          hasScrolled={hasScrolled}
          setHasScrolled={setHasScrolled}
        />{" "} */}
        </>
      )}
    </div>
  )
}

export default App
