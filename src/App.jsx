import { useEffect, useRef, useState } from "react";

import { ToastContainer } from 'react-toastify';

import { setPercentageViewPage, setValueMetric } from "./analytics/analytics.page";
import { Carrousel } from "./components/carrousel/Carrousel";
import { Hero } from "./components/hero/Hero";
import { Benefits } from './components/benefits/Benefits'
import { LaunchFeatures } from './components/launch_features/LaunchFeatures'
import { Modal } from "./components/modal/Modal";
import { Route, Routes, useLocation } from "react-router-dom";
import { PanelAdmin } from "./components/panel_admin/PanelAdmin";

export const App = () => {

  const refVisitPage = useRef(false);
  const refViewEndPage = useRef(false);
  const refEmailSent = useRef(false);

  const location = useLocation();

  // Visitas a la pagina
  useEffect(() => {
    setValueMetric(refVisitPage, "counterVisits");
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', () => setPercentageViewPage(refViewEndPage));
    return () => window.removeEventListener('scroll', () => setPercentageViewPage(refViewEndPage));
  }, []);

  const [viewModal, setViewModal] = useState(false);

  return (
    <Routes>
      <Route path="/admin" element={<PanelAdmin />} />
      <Route path="/" element={
        <>
          {viewModal && (
            <Modal
              refEmailSent={refEmailSent}
              viewModal={viewModal}
              setViewModal={setViewModal}
            />
          )}

          <section id="hero">
            <Hero />
          </section>

          <section id="demo">
            <Carrousel
              setViewModal={setViewModal}
            />
          </section>

          <section id="benefits">
            <Benefits />
          </section>

          <section id="launch-features">
            <LaunchFeatures
              setViewModal={setViewModal}
            />
          </section>

          <ToastContainer
            autoClose={1500}
          />
        </>
      } />
    </Routes>
  );
};
