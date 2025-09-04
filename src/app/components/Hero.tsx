"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { div } from "framer-motion/client";
import { useEffect, useState } from "react";

export default function Hero ()
{
    const x = useMotionValue( 0 );
    const y = useMotionValue( 0 );

    // Smooth the movement with spring physics
    const springX = useSpring( x, { stiffness: 50, damping: 20 } );
    const springY = useSpring( y, { stiffness: 50, damping: 20 } );

    // const [ mousePosition, setMousePosition ] = useState( { x: 0, y: 0 } );
    const [ showVignette, setShowVignette ] = useState( false );
    const [ showText, setShowText ] = useState( false );

    useEffect( () =>
    {
        const handleMouseMove = ( e: MouseEvent ) =>
        {
            const offsetX = ( e.clientX / window.innerWidth - 0.5 ) * 20; // intensity
            const offsetY = ( e.clientY / window.innerHeight - 0.5 ) * 20;
            x.set( offsetX );
            y.set( offsetY );
        };

        window.addEventListener( "mousemove", handleMouseMove );

        // Delay vignette until zoom animation ends (2s)
        const timer = setTimeout( () => setShowVignette( true ), 2000 );
        const textTimer = setTimeout( () => setShowText( true ), 2500 );

        return () =>
        {
            window.removeEventListener( "mousemove", handleMouseMove );
            clearTimeout( timer );
            clearTimeout( textTimer );
        };
    }, [] );

    return (
        <div className="relative h-screen w-screen overflow-hidden">
            {/* Background Image with animation */ }
            <motion.div
                className="absolute inset-0"
                initial={ { scale: 1.3 } }
                animate={ { scale: 1.1 } }
                transition={ { duration: 2, ease: "easeOut" } }
                style={ {
                    backgroundImage: "url('../hero-bg.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    x: springX,
                    y: springY
                } }
            />

            {/* vignette overlay */ }
            { showVignette && (
                <motion.div
                    className="absolute inset-0 pointer-events-none"
                    initial={ { opacity: 0 } }
                    animate={ { opacity: 1 } }
                    transition={ { duration: 1.5, ease: "easeInOut" } }
                    style={ {
                        background: "radial-gradient(ellipse, rgba(0,0,0,0) 60%, rgba(0,0,0,0.7) 100%)"
                    } }
                />
            ) }

            {/* Overlay content */ }
            { showText && (
                <motion.div
                    className="relative z-10 flex h-full items-center justify-center text-center text-white px-4"
                    initial={ { opacity: 0 } }
                    animate={ { opacity: 1 } }
                    transition={ { duration: 1.5, ease: "easeOut" } }
                >
                    <div className="bg-white/10 backdrop-blur-xs shadow-lg px-12 py-8 w-[50%] max-w-3xl mx-auto rounded-lg ">
                        <h1 className="text-5xl font-bold mb-4 drop-shadow-md">
                            Property Marketplace
                        </h1>
                        <p className="text-lg font-bold mg-6 drop-shadow-sm">Buy and Sell properties</p>
                    </div>
                </motion.div>
            ) }

        </div>
    )
}