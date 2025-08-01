import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Eye, Trash2 } from "lucide-react";
import { motion } from "framer-motion";

interface DetectedObject {
  label: string;
  confidence: number;
  bbox?: [number, number, number, number];
}

interface ImagePreviewProps {
  imageUrl: string;
  isAnalyzing?: boolean;
  detectedObjects?: DetectedObject[];
  summary?: string;
  onAnalyze: () => void;
  onClear: () => void;
}

export const ImagePreview: React.FC<ImagePreviewProps> = ({
  imageUrl,
  isAnalyzing = false,
  detectedObjects = [],
  summary,
  onAnalyze,
  onClear,
}) => {
  return (
    <Card className="p-6 bg-gradient-card border-border/50">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-foreground">Image Preview</h3>
          <Button
            onClick={onClear}
            variant="outline"
            size="sm"
            className="text-destructive hover:text-destructive"
          >
            <Trash2 className="w-4 h-4 mr-2" />
            Clear
          </Button>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative rounded-lg overflow-hidden bg-muted"
        >
          <img
            src={imageUrl}
            alt="Preview"
            className="block max-w-full h-auto mx-auto rounded-lg"
          />
          
          {/* This section will be empty until real detections are available */}
          {detectedObjects.length > 0 && (
            <div className="absolute inset-0 pointer-events-none">
              {/* Real bounding boxes will be mapped here later */}
            </div>
          )}
        </motion.div>

        <div className="flex justify-center">
          <Button
            onClick={onAnalyze}
            disabled={isAnalyzing}
            className="bg-gradient-primary hover:opacity-90 text-primary-foreground min-w-[140px]"
          >
            {isAnalyzing ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-4 h-4 mr-2"
                >
                  <Sparkles className="w-4 h-4" />
                </motion.div>
                Analyzing...
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 mr-2" />
                Summarize with AI
              </>
            )}
          </Button>
        </div>

        {/* Results section */}
        {(detectedObjects.length > 0 || summary) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-4 pt-4 border-t border-border/50"
          >
            <h4 className="font-semibold text-foreground flex items-center">
              <Eye className="w-4 h-4 mr-2" />
              Detection Results
            </h4>
            
            {detectedObjects.length > 0 && (
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Detected objects:</p>
                <div className="flex flex-wrap gap-2">
                  {detectedObjects.map((obj, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-primary/10 text-primary hover:bg-primary/20"
                    >
                      {obj.label} ({Math.round(obj.confidence * 100)}%)
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {summary && (
              <div className="p-4 bg-muted/50 rounded-lg">
                <p className="text-sm text-foreground">{summary}</p>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </Card>
  );
};